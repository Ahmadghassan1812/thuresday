import logo from './logo.svg';
import './App.css';

import React from 'react';
import { render } from '@testing-library/react';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data :"",
      prices:""
    }
  }
  info(){
    fetch('http://localhost:8000/getData')
    .then(response => response.json())
    .then(json => this.setState({data:json}))
    .catch(error => console.error(error));
  }
  products(){
    fetch('http://localhost:8000/getPrice')
  .then(response => response.json())
  .then(json => this.setState({prices:json}))
  .catch(error => console.error(error));
  }
  fetchData=()=>{
    this.info();
    this.products();
  }
  render(){
    return(
      <div>
        <button onClick={this.fetchData}>fetch</button>
        <p>{this.state.data.name}</p>
        <p>{this.state.data.age}</p>
        <p>{this.state.data.field}</p>

        <div><p>{this.state.prices.price1}</p>
        <p>{this.state.prices.price2}</p>
        <p>{this.state.prices.price3}</p>
        <p>{this.state.prices.price4}</p>
        </div>
      </div>
    )
  }
}





// function getdata(){
//   fetch('http://localhost:8000/getdata')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
// }
// function getprice(){
//   fetch('http://localhost:8000/getprice')
//   .then(response => response.json())
//   .then(json => setData(json))
//   .catch(error => console.error(error));
// }



// function App() {
//   {getdata()}
//   {getprice()}
//   return (
//     <div className="App">
// a
//     </div>
//   );
// }

export default App;
