import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}> 
				<Image style={{width: 80, height: 80}} 
					source={require('./cutie.png')} />
				<Text style={styles.logotext}>ADRDE LOGIN</Text>
			</View>
			)

	}
}

const styles= StyleSheet.create({
	container: {
		flex:1,
		justifyContent:'flex-end',
		alignItems:'center',
		marginVertical:30,
		paddingTop:150
		
	},
	logotext:{
		marginVertical:15,
		fontSize:18,
		color:'black',
		fontWeight:'bold'
		
	}

});	
