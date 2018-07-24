import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Officer from './officer';

export default class Splash extends Component { 
  render() {
    return (

      <View style={styles.container}>
      
      <View style={styles.logo}>
      <Image  style={{width:200, height:200}}  
      source={require('./1.png')}
      />
      
        
      <View>
      <Text style={styles.logotext}>ADRDE</Text>
      </View>
      <View>
      </View>
      <Text style={styles.subtitle}>Powered by DRDO</Text>      
       </View>

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logotext:
    {color:'#3b3638' ,
    fontSize:40 ,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center'
    

  },
  logo:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'

  },
 
  subtitle:{
    color: 'red',
    fontWeight: '200',
    paddingBottom:50,
    justifyContent:'center'
  }
  
});
