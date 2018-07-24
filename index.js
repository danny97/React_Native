
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Splash from './Splash';
import Vdetails from './Vdetails';
import Button from './Button';
import Officer from './officer';
import Routes from './Routes';

var SQLite = require('react-native-sqlite-storage'); 
class Main extends Component<{}>{
	
	constructor(props){
		super(props);
		this.state = { currentScreen: 'Splash'};
		setTimeout(()=>{
					this.setState({currentScreen: 'Routes'});
		}, 2000)
	}
	render(){
		const { currentScreen} = this.state
		let mainScreen = currentScreen === 'Splash' ? <Splash/> :<Routes/>;
		return (mainScreen);
	}
}

AppRegistry.registerComponent('user', () => Main);