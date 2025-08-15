import React, { useState } from 'react'
import '../styles/Counter.css'


const Counter = () => {
    const [Count,setCount] = useState(1)

    const increase = () => {
        setCount(Count+1);
    }
    const decrease = () => {
        setCount(Count-1);
    }
    
    return (
        <div className='counts'>
            <button onClick={decrease}>-</button>
            <p>{Count}</p>
            <button onClick={increase}>+</button>
        </div>
      
    );
}
export default Counter
