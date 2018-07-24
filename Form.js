import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
var SQLite = require('react-native-sqlite-storage')

var db=SQLite.openDatabase({name:'data.db', createFromLocation:'~sqldb1.db'})

export default class Form extends Component<{}> {
	constructor(Props)
  	{
    	super(Props)
    	this.state=
    	{
    		username:"",
    		username1:"",
     		 pawd:"",
     		 paswd1:""
    	};
    		db.transaction((tx) =>
    		{
      			tx.executeSql('SELECT * FROM Login where username=?', ['adb'], (tx,results) =>{
        		var len=results.row.length;
        		

        	if(len>0){
          		var row=results.row.item(0);
          		
          		this.setState({username1: row.username});
          		this.setState({paswd1: row.pawd});


        	}
     	 });
    	});
	}

	render(){
		return(
			<View style={styles.container}> 
				<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Email or UserName"
					onChangeText={(username) => this.setState({username1})}
					value={this.state.username}
					returnKeyType="next"
					placeholderTextColor='#ffffff'
				/>
				<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Password"
					onChangeText={(paswd) => this.setState({paswd1})}
					value={this.state.paswd}
					secureTextEntry={true}
					returnKeyType="go"
					placeholderTextColor="#ffffff"
				/>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>{this.props.type}</Text>
				</TouchableOpacity> 
			</View>
			);

	}
}

const styles= StyleSheet.create({
	container: {
		flexGrow:1,
		justifyContent:'center',
		alignItems:'center'
		
	},
	inputBox:{
		width:300,
		backgroundColor:'rgba(255,255,255,0.3)',
		borderRadius:30 ,
		paddingHorizontal:16,
		fontSize:16,
		color:'#ffffff',
		marginVertical:10
	},
	buttonText:{
		fontSize:16,
		fontWeight:'500',
		color:'#ffffff',
		textAlign:'center'

	},
	button:{
		backgroundColor:'#1c313a',
		width:100,
		borderRadius:32,
		marginVertical:10,
		paddingVertical:16
	}
});	
