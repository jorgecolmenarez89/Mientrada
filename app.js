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

export default class Mientrada extends Component {
  
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
    this.handleChange = this.handleChange.bind(this);
  }

  onPressLearnMore(){
    alert('Evento Funcion');
  }

  handleChange(e) {
    //this.setState({ text: e.target.value });
    alert(this.state.text);
  }

  render() {
    return (
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
    );
  }
}

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

AppRegistry.registerComponent('Mientrada', () => Mientrada);
