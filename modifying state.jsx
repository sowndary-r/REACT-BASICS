import React from 'react';
class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      count : 0
    };
  }
handleClick()
{
  this.setState(
     {
       count : this.state.count+1
     },
     function()
     {
        console.log("job done");
     }
  );
}
  render()
  {
    return(
    <div>
      <p>Button presses :{this.state.count}</p>
      <button onClick={this.handleClick.bind(this)}>ADD ME</button>
    </div>
    );
  
}
}
export default App;
