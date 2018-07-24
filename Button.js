import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import Routes from "./Routes";
import {Actions} from 'react-native-router-flux';


export default class Button extends Component<{}> {

	constructor(props){
		super(props);
		this.state = {name: "REACT"}
	}


	Login = () => {
		Actions.Login();
	}
    Officer = () => {
		Actions.officer();
	}
  
    


	render() {
		return(
			<ImageBackground source={require('./badal.jpg')} 
				 style={styles.container}>
				
	
				<TouchableHighlight 
						style={styles.button} 					
                     onPress={this.Officer}   >
						<Text style={styles.ButtonText}>OFFICER LOGIN</Text>
					</TouchableHighlight>		

					<TouchableHighlight style={styles.button}  onPress={this.Login}> 
						<Text style={styles.ButtonText}>GATE LOGIN</Text>
					</TouchableHighlight>		
					
					
				
			</ImageBackground>
		);
	}
}

const styles= StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "purple",
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	button:{
		borderRadius:20,
		backgroundColor:'black',
		width:150,		
		marginVertical:10,
		marginHorizontal:20,
		paddingVertical:16,
		marginLeft:35,
		marginTop:40	
	},
	ButtonText:{
		color:'white',
		fontWeight:'500',
		fontSize:16,
		textAlign:'center'
	}
});