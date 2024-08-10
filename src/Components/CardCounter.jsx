import "../CardCounter.css";
import "../Button.css";
import React, { useState } from "react";

const CardCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1); };
    const decrement = () => { setCount(count - 1); };
    return (
        <div className="card">
            <h1>Card Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment} className="btn increase">Increase</button>
            <button onClick={decrement} className="btn decrease">Decrease</button>
        </div>
    );
};

export default CardCounter;