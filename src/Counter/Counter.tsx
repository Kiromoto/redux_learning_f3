import React, {useState} from 'react';
import './Counter.Module.scss'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    return (
        <div>
            <h1>Value: {counter}</h1>
            <button className="btn" onClick={increment}>Increment</button>
        </div>
    )
}

