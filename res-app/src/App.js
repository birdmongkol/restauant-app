import React, { Component } from 'react';
import logo from './cash.svg';
import './App.css';
import { Container, Header, Icon, Image, Menu } from 'semantic-ui-react'


class App extends Component {
  render() {

    return (
      <div className="App">
        <Headers />
      </div>
    );
  }
}


class Headers extends Component {


  render() {
 
    return (
      <div className="headder">
        <Header as='h2'>
          <Menu stackable>
            <Menu.Item>
              <img src={logo} />
            </Menu.Item>
            <Menu.Item  onClick={()=> this} >
              home
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}

export default App;
