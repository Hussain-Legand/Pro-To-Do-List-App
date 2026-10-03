import {useState} from "react";

function LightSwitch() {
    // Js Part

    const [isLightOn, setIsLightOn] = useState(false);

    return (
        // Html Part

        <div style={{textAlign : 'center', marginTop : '50px'}}>
            {isLightOn ? <h1 style={{color : 'yellow'}}>The Room is Lighted</h1> : <h1 style={{color : 'darkgray'}}>The Room is Dark</h1>}

            <button onClick={() => setIsLightOn(!isLightOn)}>
                {isLightOn ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
}

export default LightSwitch;