import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	AsyncStorage,
	Navigator
}from 'react-native'
import {
	StackNavigator, 
} from 'react-navigation'

class Second extends Component {
	
	constructor() {
		super()
		this.state={text:''};
		this.navigate = this.navigate.bind(this)
	}
	
	navigate(name) {
		this.props.navigator.push({
			name
		})
	}
	
	render(){
		return(
			<View style={{flex: 1}}>
				
				<View 
					style={{
						flex: 0.15, 
						backgroundColor: 'white'
					}}>
					<View style={{flex: 1, alignItems: 'flex-start'}}>
						<TouchableHighlight onPress={() => this.props.navigator.pop()} style={styles.backButton}>
							<View style={styles.buttonContainer}>
								<Text style={{color: '#000000', fontSize: 18}}>Back</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				
				<View 
					style={{
						flex: 1, 
						backgroundColor: 'grey',
						alignItems: 'center',
					}}>
					<TextInput style={styles.textIn}
						multiline = {true}
						maxLength = {40}
						numberOfLines = {4}
						placeholder='Add Description'
						onChangeText={(text) => this.setState({text})}
					/>
				</View>
				
				<Text style={{padding: 10, fontSize: 32}}>
					{this.state.text.split(' ').join(' ')}
				</Text>
				
				<View 
					style={{
						flex: 1, 
						backgroundColor: 'grey',
						alignItems: 'center',
					}}>
					<TextInput style={styles.textIn}
						multiline = {true}
						maxLength = {40}
						numberOfLines = {4}
						placeholder='Drop Down for severity, use picker'
					/>
				</View>
				
				<View // Button Submit
					style ={{
						flex: 0.2, 
						backgroundColor: 'white',
						
					}}>
					<View style={{flex: 1, alignItems: 'flex-end'}}>
						<TouchableHighlight onPress={() => this.navigate('FourthPage', {text: this.state.text})}
							style={{
								paddingLeft: 10,
								paddingRight: 10,
								backgroundColor: '#D3D3D3',
								borderRadius: 10,
							}}>
							<View style={styles.buttonContainer}>
								<Text style={{color: '#000000', fontSize: 18}}>Submit</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				
			</View>
			


		)
	}
}

const styles = StyleSheet.create({
	textIn: {
		width: 300,
		backgroundColor: 'white'
	},
	backButton: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 50,
		paddingRight: 50,
		backgroundColor: '#D3D3D3',
		borderRadius: 10,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 200,
		height: 80,
		backgroundColor: '#32cd32',
		borderRadius: 10,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
});

export default Second
