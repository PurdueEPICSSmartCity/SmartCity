import React, {Component} from 'react'
import {
	AppRegistry, 
	Text, 
	View, 
	Navigator
} from 'react-native'
import {
	StackNavigator, 
} from 'react-navigation'
import First from './app/First'
import Second from './app/Second'
import Third from './app/Third'
import Fourth from './app/Fourth'

export default class AwesomeProject extends Component {
	
	constructor() {
		super()
		
		this.renderScene = this.renderScene.bind(this)
	}
	
	navigate(property){
		this.props.navigator.push({
			passProps: {
			name: text}
		})
	}
	
	
	
	renderScene(route, navigator) {
		var globalNavigatorProps = {navigator}
		
		if(route.name === 'FirstPage') {
			return <First {...globalNavigatorProps} {...route.passProps}/>
		} 
		else if(route.name === 'SecondPage') {
			return <Second {...globalNavigatorProps} {...route.passProps}/>
		}
		else if(route.name === 'ThirdPage') {
			return <Third {...globalNavigatorProps} {...route.passProps}/>
		}
		else if(route.name === 'FourthPage') {
			return <Fourth {...globalNavigatorProps} {...route.passProps}/>
		}
	}
	
	render() {
		return (
			<Navigator
				initialRoute={{name: 'FirstPage'}}
				renderScene={this.renderScene}
			/>
		);
	}
	
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

