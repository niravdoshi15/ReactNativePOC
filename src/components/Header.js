import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>Travelers</Text>
            </View>
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