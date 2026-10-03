import {createContext, useContext} from 'react';

const ThemeContext = createContext('dark');

function Button() {
  
    const theme = useContext(ThemeContext);

    return(
        <div style={{ textAlign: 'center', margin: '50px auto', width: 'fit-content', border: '2px solid #007bff', borderRadius: '12px', padding: '20px' }}>
            <button className={theme}>Click Me</button>
        </div>
    )
}

export default Button;
