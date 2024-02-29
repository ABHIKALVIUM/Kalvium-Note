import { Component } from "react";
import "./App.css"

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      value:""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event)=>{
    this.setState({
      value:event.target.value
    })
  }


  render(){
    return(
      <>
        <header className="head">
          <h1>Note App</h1>
        </header>

        <div className="main main-sec" >
          <div className="input" onSubmit={this.handleSubmit}>
            <h3>Input</h3>
            <textarea className="input-text" onChange={this.handleChange}/>
          </div>

          <div className="result">
            <h3>Pro Note</h3>
            <div className="result-text">
              <div className="color">
              {this.state.value}
              </div>
            </div>
          </div>
        </div>

      </>

    )
  }
}