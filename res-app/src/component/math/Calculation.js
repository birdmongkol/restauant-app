import React, { Component } from 'react';
import { Container, Header, Icon, Image, Menu, Grid, Segment, Form, Input } from 'semantic-ui-react'
import {dd } from '../../App'

class Calculation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

    }

    updateInputValue(evt) {

        this.setState({
            inputValue: evt.target.value
          });
    }


    keyPress(evt){
        if(evt.keyCode == 13){
            console.log('value', evt.target.value);
            var tableID = evt.target.value

            evt.target.value = ''
            this.props.main.tableIDGet(tableID)
            this.setState({ inputValue: '' })
         }
    }

    

    render() {

        const { main } = this.props
        return (
            <Grid.Column>
                <Segment>
                    <Form>
                        <Form.Field inline>
                            <label>Table number</label>
                            <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} onKeyDown={evt => this.keyPress(evt,this) }/>
                        </Form.Field>
                    </Form>

                    {main.state.tableID}

                </Segment>
            </Grid.Column>
        );
    }
}

export default Calculation;