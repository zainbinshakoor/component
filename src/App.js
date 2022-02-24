import React , {Component} from 'react';
import Header from './components/header';
import logo from './logo.svg';
import './App.css';
class App extends Component{
constructor(){
  super();
  this.state={
    String:"Hello Zain",
    
  }
}

  render(){
    return(
      <div className="App">
      <Header/>
    </div>
    )
  }
}

export default App;
