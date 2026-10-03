import { useState } from "react";

function ProfileCard() {
    // Js Part 

    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    return(
        // Html Part
        <div style={{textAlign : 'center', margin : '80px auto', border : '2px solid green', width : '400px', borderRadius : '10px',}}>
            <input 
            style={{margin : '20px'}}
            placeholder="Your Full Name..."
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>

            <input 
            style={{margin : '20px'}}
            placeholder="Your Role..."
            type="text" 
            value={job}
            onChange={(e) => setJob(e.target.value)}/>

            <div style={{
            width : '300px',
            margin : '20px auto',
            border : '1px solid crimson', 
            backgroundColor : 'crimson',
            borderRadius : '10px',
            color : 'White'
            }}>
                <h4>You're Name is : {name || 'User Name'}</h4>
                <br />
                <h4>You're Job is : {job || 'Developer'}</h4>
            </div>
        </div>
    )
}

export default ProfileCard;