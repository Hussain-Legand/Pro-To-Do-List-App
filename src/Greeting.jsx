function Greeting(props) {
  return (
    <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '800px', border: '2px solid #007bff', borderRadius: '12px', padding: '20px' }}>
      <h1>Hello , Welcome {props.name} in React Notebook</h1>
    </div>
  )
}

export default Greeting;
