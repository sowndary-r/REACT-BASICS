import React,{ useState }from'react';
function Counter()
{
  const [count,setCount]=useState(0);
  return(
  <div>
    <p>U clicked {count} times</p>
    <button onClick={ ()=> setCount(count+1)}>click me</button>
  </div>
  );
}
export default Counter;
