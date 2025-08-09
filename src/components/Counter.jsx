import React, { useState } from 'react'
import '../styles/Counter.css'


const Counter = () => {
    const [Count,setCount] = useState(0)

    const increase = () => {
        setCount(Count+1);
    }
    const decrease = () => {
        setCount(Count-1);
    }
    
    return (
        <div className='counts'>
            <div onClick={decrease}>-</div>
            <div>{Count}</div>
            <div onClick={increase}>+</div>
        </div>
    );
}
export default Counter
