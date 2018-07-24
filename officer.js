import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from './Logo';
import Form from './Form';
import Routes from "./Routes";



export default class Officer extends Component<{}> {

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
				<View style={{height: "100%", width: "100%"}}>
				
				<Logo />
				<Form type="Login"/>
				
			</View>
			</View>
		);
	}
}

const styles= StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "orange",
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	signupTextCont : {
		flexGrow:1,
		alignItems:'flex-end',
		justifyContent:'center',
		marginVertical:16,
		flexDirection:'row',
		paddingVertical:16
	},
	signupText:{
		color:'rgba(255,255,255,0.7)',
		fontSize:16

	},
	signupButton:{
		fontWeight:'500',
		fontSize:16,
		color:'#ffffff'
	}
});