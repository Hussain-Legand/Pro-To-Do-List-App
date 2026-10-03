import { useState } from 'react';

function LogIn() {
    // Js Part

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const button = document.getElementsByName('button');

    return(
        // Html Part
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {isLoggedIn ? <h1>Welcome BAck, Hussain 👋</h1> : <h1>Please Log In First 🔒</h1>}

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
        </div>

    );
}

export default LogIn;