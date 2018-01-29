import React, { Component } from 'react';
import './App.css';
import { Container, Header, Icon, Image, Menu } from 'semantic-ui-react'
import Headers from '../src/component/general/Headers'


class App extends Component {
  render() {

    return (
      <div className="App">
        <Headers />

      </div>
    );
  }
}




export default App;
