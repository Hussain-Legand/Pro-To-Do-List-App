import { useState } from "react";

function LiveInput() {
    // Js Part 

    const [text, setText] = useState('');

    return(
        // Html Part
        <div style={{textAlign : 'center', margin : '80px auto', border : '2px solid green', width : '400px'}}>
            <input 
            style={{margin : '20px' }}
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}/>

            <h4>Now You're writing : {text}</h4>
        </div>
    )
}

export default LiveInput;