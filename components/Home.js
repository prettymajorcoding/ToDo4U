import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Agendas from './Agendas';
import { AGENDAS } from '../shared/agendas';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);
        this.state = {
            agendas: AGENDAS
        };
    }

    render() {
        return (
            <Agendas agendas={this.state.agendas}/>
        )
    }
}

export default Home;