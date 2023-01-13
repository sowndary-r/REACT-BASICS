import React from 'react'; 
class App extends React.Component {   //Parent component
     render(){
       return(
        <div>
          <First/>  //child component
          <Third></Third> //child component
        </div>
     );
     }
}

class First extends React.Component  //class component
{
  render()
  {
    return(
    <div><h1>First class component</h1>
    <Second></Second></div>
    );
  }
}
class Second extends React.Component
{
  render()
  {
    return(
    <h2>Second class component</h2>
    );
  }
}
function Third()  //functional component
{
   return(
  <h3>Functional Component</h3>
   );
}
