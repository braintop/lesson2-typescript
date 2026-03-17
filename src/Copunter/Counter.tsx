import { useState } from "react";

export function Counter() {
    let [count, setCount] = useState(0);  

    function increment() {
        //count = count + 1;
         setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    return <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>Count: {count}</p>
    </div>;
}   