import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Back extends Component {
    render() {
        return (
            <Button title='Back' onPress={()=>this.props.navigation.navigate('Continue')}/>
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