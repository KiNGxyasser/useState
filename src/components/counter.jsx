import { useState } from "react";

const Counter = ({}) => {
    const [count,setCount] = useState(0);
    
    return(
        <div>
            <button className="btn btn-sm btn-secondary me-1" onClick={()=>{setCount(count + 1)}}>Increment</button>
            <span className="badge text-bg-primary me-1">{count}</span>
            <button className="btn btn-sm btn-secondary me-1" onClick={()=>{setCount(count - 1)}}>Decrement</button>
        </div>
    )

}

export default Counter;