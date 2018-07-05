import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
        <div>
          <div>{this.props.time}</div>
          <div>
            <span>React中修改名</span>
            <input type="text" value = {this.props.firstName} onChange={(e) => this.props.handleNameChange('firstName', e.target.value)}/>
          </div>
          <div>
            <span>React中修改姓</span>
            <input type="text" value = {this.props.lastName} onChange={(e) => this.props.handleNameChange('lastName', e.target.value)}/>
          </div>
        </div>
    );
  }
}