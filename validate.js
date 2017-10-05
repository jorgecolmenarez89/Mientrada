import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,Button,TextInput,Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux'

export default class validate extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        text: 'Useless Placeholder',
        user: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }

  onPressLearnMore(){
    //alert(this.state.text);
    const url = `https://jlcr.000webhostapp.com/apientradas/api/info/getInfo?i=${this.state.text}`

    fetch(url)
    .then(response => response.json())
    .then(resp => {

      if(resp.success)
      {
        this.setState({
          user: resp.data
        });

        var datos = this.state.user;  
       Actions.Home({datos});
      }else
      {
        console.warn('No estas Registrado');
      }

      //console.warn('data', data.success)


    })
  }


 handleChange(e) {
    //this.setState({ text: e.target.value });
    //alert(this.state.text);
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
          color="blue"
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