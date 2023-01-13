import React from 'react'; 
function App(props)
{
  return(
<p>Employee name :{props.name} and age is {props.age}</p>
  );
}
export default App;
//main js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App name="Sowndarya" age={21}/>
  
); 
