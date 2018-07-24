import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from './Logo';
import Form from './Form';




export default class Login extends Component<{}> {

	constructor(props){
		super(props);
		this.state = {name: "REACT"}
	}

	
	Vdetails = () => {
		Actions.Vdetails();
	}

	render() {
		return(
			<View style={styles.container}>
				<View style={{height: "100%", width: "100%"}}>
				
				<Logo />
				<Form type="Login"/>
				
				<TouchableHighlight style={styles.button} onPress={this.Vdetails}   >
					<Text style={styles.buttonText}>{this.props.type}</Text>
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
		backgroundColor: "brown",
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