import React, { Component } from 'react';
import {Linking, StyleSheet, Text, View } from 'react-native';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.content}>
                    <View style={styles.link}>
                        <Text style={styles.text} onPress={() => Linking.openURL('http://google.com')}>
                            Terms of Service  |  Privacy & Security
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.paragraph}>© 2019 The Travelers Indemnity Company. All rights reserved</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        minHeight: '16%',
        borderTopWidth: 5,
        borderColor: '#cc2d30',
        backgroundColor: '#b5b6b8'
    },
    content: {
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 0,
        paddingLeft: 15,
        // display: 'block',
        // marginLeft: 'auto',
        marginRight: 'auto'
    },
    link: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 30
    },
    text: {
        color: '#ffffff',
    },
    paragraph:{
        // fontFamily: "Helvetica Neue",
        fontSize: 15,
        color: '#313235'
    }
})