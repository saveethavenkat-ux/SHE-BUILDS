import { useState } from 'react'
function Counter(){

    //local variable
    const[count,setCount]=useState(0);
    //arrow fuction
    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement=() => {
        setCount(count-1);
    }

    return(
        <div>
            <h1>Counter Component</h1>
            <p> Count : {count}</p><br/>
            <button onClick={handleIncrement}> + </button>
            <button onClick={handleDecrement}> - </button>
        </div>
    );
}
export default Counter;