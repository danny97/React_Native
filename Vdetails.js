import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Login from './Login'



export default class Vdetails extends Component<{}> {

	constructor(props){
		super(props);
		this.state = {name: "REACT"}
	}

	signup = () => {
		Actions.Signup()
	}

	render() {
		return(
			<View style={styles.container}>
				
				
				
				 
				<Text style={{color: '#ffffcc', fontSize: 30, fontWeight:'bold', marginLeft:70, marginTop:60}}> Enter Visitor details</Text>	
				
				<View style={styles.signupText}> 
				
				<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(255,255,255,0.3)'
					placeholder='Visitor name'
					placeholderTextColor='white'
					
			    />
				
					<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(255,255,255,0.3)'
					placeholder='Mobile no.'
					placeholderTextColor="white"
					
				/>	
			
				<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(255,255,255,0.3)'
					placeholder='Aadhar no.'
					placeholderTextColor="white"
					
				/>

				<TouchableHighlight style={styles.button}> 
						<Text style={styles.ButtonText}>SUBMIT</Text>
					</TouchableHighlight>
				
			</View>
			
			</View>
			
		);
	}
}

const styles= StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#0a2a2a",
		flex:1,
		
		
	},
	inputBox:{
		width:300,
		backgroundColor:'rgba(255,255,255,0.3)',		
		fontSize:16,
		color:'#ffffff',
		height:40,
		marginLeft:2,
		marginTop:30
	},
	
	signupText:{
		color:'rgba(255,255,255,0.7)',
		fontSize:40,
		fontStyle:'italic',
		marginLeft:70,
		marginTop:70
		
	},
	button:{
		
		backgroundColor:'#00ffff',
		width:100,		
		marginVertical:10,
		marginHorizontal:20,
		paddingVertical:16,
		marginLeft:90,
		marginTop:40	
	},
	ButtonText:{
		color:'blue',
		fontWeight:'500',
		fontSize:16,
		textAlign:'center'
	}
});