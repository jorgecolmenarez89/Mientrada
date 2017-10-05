
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,Button,TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import QRCode from 'react-native-qrcode';

export default class Home extends Component {
 
  constructor(props) {
    super(props);
  }

 onPressLearnMore(){
   Actions.validate();
 }
 render() {

  const datos = this.props.datos;
  console.warn(datos.identificacion);

   return(  <View style={styles.container}>
      <QRCode
          value={`
          ${datos.identificacion} 
          ${datos.nombres} 
          ${datos.apellidos}
          `}
          size={200}
          bgColor='purple'
          fgColor='white'/>
       <Button
         onPress={this.onPressLearnMore}
         title="salir"
         color="blue"
         accessibilityLabel="Learn more about this purple button"/>

     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:'white',
   
 },
});