import { useEffect, useState } from "react";

function RandomAdvice() {
    // Js Part 

    const [advice, setAdvice] = useState(null)
    const [loading, setLoading] = useState(true)

    // Advanced API fetch => function(){ fetch(API) }

    const fetchAdvice = () => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            setAdvice(data.slip.advice);
            setLoading(false)
        });

    }

    // useEffect Syntax : useEffect(() => {},[]);

    useEffect(() => {
        fetchAdvice()
    },[]);

    return (
        
        // Html Part

        <div style={{ textAlign: 'center', marginTop: '50px' }}>

            { loading ? ( <h1>The Advice is Loading ... </h1> ) : ( <h1>{advice}</h1> ) }

            <button onClick={fetchAdvice} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Get Another Advice 🎲
            </button>

        </div>

    )
}

export default RandomAdvice;