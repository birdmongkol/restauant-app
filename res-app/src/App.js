import React, { Component } from 'react';
import './App.css';
import { Container, Header, Icon, Image, Menu, Grid, Segment, Form, Input } from 'semantic-ui-react'
import Headers from '../src/component/general/Headers'
import logo from './logo.svg';
import Calculation from '../src/component/math/Calculation'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableID: ''

    };

  }

  tableIDGet(dd) {
    var arr = new Array('One', 'Two', 'Three');
    // for (let i = 0; i < arr.length; i++) {
    //   const element = arr[i];
    //   if (element == dd) {
    //     this.setState({ tableID: dd })
    //   }
    // }
    if ( arr.indexOf(dd) == -1 ) {
     alert( 'no this table' )
     console.log(arr.indexOf(dd))
    }else{
     console.log(arr.indexOf(dd))
     this.setState({ tableID: dd })
    }
  }


  render() {

    return (
      <div className="App">
        <Headers />
        <br />
        <Grid columns='equal'>d

          <Grid.Column width={1}>
          </Grid.Column>

          <Grid.Column width={10}>
            <Segment >
              Zone A
            </Segment>
          </Grid.Column>

          <Calculation main={this} />

          <Grid.Column width={1}>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
