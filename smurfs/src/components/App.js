import React, { Component } from 'react'; 
import './App.css';
import {Smurf} from "./Smurf"
import {connect} from "react-redux";
import {fetchSmurfs, addSmurfs} from "../actions"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs:[]
      }
      console.log("App state of smurfs:",this.state.smurfs)
    }
  
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  
  handleChanges = event => {
    this.setState({[event.target.name]:event.target.value})
  }
  
  addSmurfHandler = event => {
    event.preventDefault();
    this.props.addSmurfs(this.state);
    this.setState({
      name:"",
      age:"",
      height:"",
      id:"",
    })
  
  }
  
  
    render() {
      console.log(this.props.smurfs,"SMURFS")
      return (
        <div className="App">

      <div className = "App-smurf-images">
      <img src="http://www.animatedimages.org/data/media/1540/animated-smurfs-image-0089.gif" alt="smurf girl"/>
      </div>
        <div className="App-header">  
          <h1>Welcome to Smurf Village</h1>
        </div>

  <div className = "App-smurf-images">
      <img src="http://www.animatedimages.org/data/media/1540/animated-smurfs-image-0058.gif" alt="smurf laughing"/>
      
      </div>

      
        <div className="input-section">
          <h2>Add New Member Here:</h2>
          <input 
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChanges}
              placeholder="Name"
          />
          <input 
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChanges}
              placeholder="Age"
          />
          <input 
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleChanges}
              placeholder="Height"
          />
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleChanges}
            placeholder="ID Number"
            />
      <button onClick={this.addSmurfHandler} >ADD SMURF</button> 
          </div>
          <div className = "App-smurf-images">
      
      <img src="http://www.animatedimages.org/data/media/1540/animated-smurfs-image-0027.gif" alt="smurfs playing pattycakes "/>
      </div>
      <div className="App-smurfList">
        <h2>Village Memberlist:</h2>
          <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="App-smurf">
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </div>
             
            );
          })}
        </ul>
        </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => {
    return{
      smurfs: state.smurfs,
      error: state.error,
    }
  }
  
  export default connect(
    mapStateToProps,
  {fetchSmurfs, addSmurfs})(App)
