import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Report a Claim</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15
    },
    title: {
        color: '#313235',
        fontSize: 15
    }
})