import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Image,
	Text,
	View
} from 'react-native';
export default class Kajal extends Component 
{
	render()
{
	return(
	<View style={styles.container}>
	<View style={styles.logo}>
	<Image
	source={require('./download.png')}
	style={{width:200,height:200}}
/>
	<Text style={{ color:'green', fontSize:24,fontWeight:'bold'}}>CODE WITH ROHIT</Text>
	</View>
	</View>
	);
}
}
const styles=StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor:'red'
	},
	logo:{
		alignItems:'center',
		flexGrow:1,
		justifyContent:'center'
	}
});
AppRegistry.registerComponent('Kajal',()=>Kajal);