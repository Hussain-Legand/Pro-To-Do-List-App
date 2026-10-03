import { useState, useEffect } from "react";

function SearchWeather() {
  const [city, setCity] = useState("Cairo");
  const [temp, setTemp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = () => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    // API مجاني ومباشر يعيد الطقس دون الحاجة إلى API Key
    fetch(`https://wttr.in/${city}?format=j1`)
      .then((res) => {
        if (!res.ok) throw new Error("المدينة غير موجودة");
        return res.json();
      })
      .then((data) => {
        // الاستخراج الصحيح لدرجة الحرارة من هذا الـ API
        const currentTemp = data.current_condition[0].temp_C;
        setTemp(currentTemp);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطأ:", err);
        setError("تعذر جلب البيانات لهذه المدينة ❌");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', width: '350px', border: '2px solid #007bff', borderRadius: '12px', padding: '20px' }}>
      <h2>🌤️ تطبيق الطقس</h2>

      <input 
        type="text"
        value={city}
        placeholder="اكتب اسم المدينة..."
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '8px', width: '60%', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      <button onClick={fetchWeather} style={{ padding: '8px 12px', marginLeft: '8px', cursor: 'pointer' }}>
        بحث
      </button>

      <div style={{ marginTop: '20px' }}>
        {loading && <h3>جاري جلب البيانات... ⏳</h3>}
        {error && <h4 style={{ color: 'red' }}>{error}</h4>}
        {!loading && !error && temp !== null && (
          <div>
            <h3>المدينة: {city}</h3>
            <h2>درجة الحرارة: {temp} °C ☀️</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchWeather;


