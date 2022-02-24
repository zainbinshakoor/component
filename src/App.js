import React , {Component} from 'react';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {this.state.String}
        </p>
       <button onClick={()=>this.setState({String:"New Genration"})}> ONCLICK</button>
      </header>
    </div>
    )
  }
}

export default App;
