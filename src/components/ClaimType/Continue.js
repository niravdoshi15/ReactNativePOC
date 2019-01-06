import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Continue extends Component {
    render() {
        return (
            <Button title='Continue' onPress={()=>this.props.navigation.navigate('Back')}/>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        minHeight: '08%',
        backgroundColor: '#cc2d30'
    },
    text: {
        paddingLeft: 15,
        paddingTop: 10,
        fontSize: 25,
        textAlign: 'left',
        color: '#ffffff',
    }
})