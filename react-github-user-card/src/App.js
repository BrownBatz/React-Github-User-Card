import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import User from "../src/Components/User";
import Follower from "../src/Components/Follower";

// data.followers_url

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  getAPIUser(){
    axios.get('https://api.github.com/users/brownbatz')
      .then(results => this.setUser(results))
      .catch(err => {console.log('there was an error: ', err)})
  }

  getAPIFollowers(followerURL){
    axios.get('https://api.github.com/users/brownbatz/followers')
      .then(results => {this.setState({followers: results.data})})
      .catch(err => {console.log('there was an error: ', err)})
  }

  setUser(results){
    this.setState({user: results});
  }

  componentDidMount(){
    this.getAPIUser();
  }

  shouldComponentUpdate(nextProps, nextState){
    if ((this.state.followers === nextState.followers) && (nextState.followers.length >= 1)){
      return false;
    } else if (this.state.user.login != nextState.user.login){
      return true;
    } 
    return true;
  }

  render(){

    let renderUser = () => {
      if (this.state.user.statusText === "OK"){
        this.getAPIFollowers(this.state.user.followers_url);
        return (
          <div className="userAndFollowers">
            <User userData={this.state.user} />
            {this.state.followers.map(item => {
              return (
              <div className="followers">
                <h1>Followers of the above user: </h1>
                <Follower followerData={item} />
              </div>
              )
            })}
          </div>
          )
      } else {
      }
    }

    // The response is an object, within that object results.data is an array with all of the follower data and it has the same points that user data has

    return(
      <div className="App">
        {console.log(this.state.user)}
        {renderUser()}
      </div>
    )
  }
}

export default App;
