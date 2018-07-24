import React,{Component} from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';
import Login from "./Login";
import Button from "./Button";
import Splash from "./Splash";
import Officer from "./officer";
import  Vdetails from "./Vdetails";


export default class Routes extends Component<{}>{
	render(){
		return(
			<Router>
				<Stack key="root">
				
					<Scene key="Button" component={Button} hideNavBar={true} title="Button" color="" initial/>
					<Scene key="Login" component={Login} title="Gate Login"/>
					<Scene key="officer" component={Officer} title="Officer Login"/>
                    <Scene key=" Vdetails" component={Vdetails} title="Visitor Details"/>
					
				</Stack>	
			
			</Router>
			);
     }
}