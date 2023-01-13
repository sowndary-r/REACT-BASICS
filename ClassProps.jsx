import React from 'react'; 
class App extends React.Component {   //class components
     render(){
       return(
        <div>
          Employee Name: {this.props.name} and Age : {this.props.age} //this keyword is used for class props only 
        </div>
     );
     }
}
//main js declaration
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App name="Sowndarya" age={21}/>
  
);  
