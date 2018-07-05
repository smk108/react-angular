import React, { Component } from 'react';
import angular from 'angular';
import Timer from './components/timer';
import './test.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      time : this.getLocalTime(),
      firstName : '',
      lastName : ''
    };
    this.newTime = this.newTime.bind(this);
    this.getLocalTime = this.getLocalTime.bind(this);
    this.changeScope = this.changeScope.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount(){
    this.timer = setInterval(this.newTime , 1000);
  /*  setTimeout(this.changeScope , 3000);*/
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  changeScope(){
    angular.element(this.angularDiv).scope().update('firstName', 'hello');
  }

  newTime(){
    this.setState({time : this.getLocalTime()});
  }

  getLocalTime() {
    return new Date().toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
  }
  handleNameChange(attr,value){
    this.setState({[attr] : value});
    angular.element(this.angularDiv).scope().update([attr], value);
  }

  render() {
    return (
      <div className="main">
        <Timer
          time={this.state.time}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          handleNameChange={this.handleNameChange}/>
        <div ng-app="app" ng-controller="myCtrl" ref={ref => this.angularDiv = ref}>
          <angular-div></angular-div>
        </div>
      </div>
    );
  }
}

export default App;
