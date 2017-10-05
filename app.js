/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,TextInput
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import validate from './validate';
//import regiser from './register';
import Home from './Home';

export default class Mientrada extends Component {
 /* 
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
    this.handleChange = this.handleChange.bind(this);
    this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }

  onPressLearnMore(){
    //alert(this.state.text);
    const url = `https://jlcr.000webhostapp.com/apientradas/api/info/getInfo?i=${this.state.text}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.warn('data', data)
    })
  }

  handleChange(e) {
    //this.setState({ text: e.target.value });
    //alert(this.state.text);
  }*/

  render() {
    return <Router>
      <Scene Key="root">
        <Scene key="validate" component={validate} hideNavBar />
        <Scene key="Home" component={Home} hideNavBar/>
      </Scene>
    </Router>
   /* return (
      <View style={styles.container}>
        
         <TextInput
            style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1, marginBottom: 10}}
            onChangeText={(text) => this.setState({text})}
             onChange={this.handleChange}
            //value={this.state.text}
            placeholder="Introduzca su Identificacíon"
            placeholderTextColor="#777"
        />

        <Button
          onPress={this.onPressLearnMore}
          title="Acceder"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );*/
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
AppRegistry.registerComponent('Mientrada', () => Mientrada);
