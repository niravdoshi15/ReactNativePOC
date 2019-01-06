import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Title from './src/components/Title'
import Help from './src/components/Help'
import Continue from './src/components/ClaimType/Continue'
import Back from './src/components/Accounts/Back'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.area}>
        <Header />
        <ScrollView>
          <Title />
          <View>
            <Text>Open up App.js to start working on your app!!</Text>
          </View>
          <AppContainer/>
          <Help />
        </ScrollView>
        <View>
          <Footer />
        </View>
      </View>
    );
  }
}

// const AppDrawNavigator = createDrawerNavigator({
//   Back:{screen: Back}
// })

const AppSwitchNavigator = createSwitchNavigator({
  Continue: {screen: Continue},
  Back: {screen:Back}
})

const AppContainer = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  // header: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  area: {
    flex: 1,
    // marginTop: 20
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
