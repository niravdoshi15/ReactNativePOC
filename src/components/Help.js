import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

export default class Help extends Component {
    render() {
        return (
            <View style={styles.help}>
                <Text style={styles.helpText}>To report claim by phone, please call <Text style={{ color: '#008DB8' }} onPress={() => Linking.openURL('tel:(800) 238-6225')}>(800) 238-6225</Text>. We are available 24 hours, every day.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    help: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 350
    },
    helpText: {
        color: '#313235',
        fontSize: 14,
    }
})