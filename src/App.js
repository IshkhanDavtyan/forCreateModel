import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Field from './components/fields/field';
import Count from './components/enterFieldCount/count'
import './App.css';

export default class App extends Component {
constructor(props){
  super(props)
  this.state = {
    count:0
  }
}  

handleCount = (count)=>{
  this.setState({
    count
  })
}


  render() {
    return(
      <Router>
        <Switch>
          <Route path = '/count'>
            <Count fromChild = {this.handleCount}/>
          </Route>
          <Route path = '/field'>
            <Field count = {this.state.count}/>
          </Route>
        </Switch>
      </Router>
    )

    
    
  }
}

