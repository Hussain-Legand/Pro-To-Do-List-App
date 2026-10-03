import { useState } from 'react'

const Quote = () => {
    let array = ['Be the First', 'No Pain No Gain', 'Again & Again & Again Until U Gain', 'Just Focus'];

    const [currentQoute, setCurrentQoute] = useState(array[0]);

    const newQoute = () => {
        const random = Math.floor(Math.random() * array.length);
        setCurrentQoute(array[random]);
    }
 
    return (
        <div> 
            <h1>Your Qoute For Today is {currentQoute}</h1>
            <br />
            <button onClick={newQoute}>New Quote</button>
        </div>
    )
}

export default Quote
