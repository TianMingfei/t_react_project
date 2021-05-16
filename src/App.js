import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Redirect, withRouter} from 'react-router-dom'

import RouterTest from './RouterTest.js'
import Phone from './Phone.js'
import User from './User.js'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {

  constructor(props) {
    super(props)
    props.history.listen((link)=>{
      console.log(link)
    })

  }

  render() {
    return (
      <div>
        <p>我是导航栏</p>
        <div>
          {/* <Link to="/home">点我去Home</Link>
          <Link to="/phone">点我去Phone</Link>
          <Link to="/user">点我去User</Link> */}
          <NavLink to="/home">点我去Home</NavLink>
          <NavLink to="/phone/我是参数id">点我去Phone</NavLink>
          <NavLink to={{pathname:"/user", query:{name:"canshu1"}}}>点我去User</NavLink>
        </div>
        <Route path="/home" component={RouterTest} />
        <Route path="/phone/:id" component={Phone} />
        <Route path="/user" component={User} />

      </div>
      
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React Test</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default withRouter(App);
