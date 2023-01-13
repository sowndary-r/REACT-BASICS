import React from 'react';
class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      name : "sowndarya",
      id : 1,
      job : "web developer"
    };
  }
  render()
  {
    return(
    <div><p>Name : {this.state.name}</p><p>Id : {this.state.id}</p><p>job : {this.state.job}</p></div>
    );
  }
}
export default App;
