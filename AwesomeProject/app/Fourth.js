import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	AsyncStorage
}from 'react-native'
import {
	StackNavigator, 
} from 'react-navigation'

class Fourth extends Component {
	
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
				
				<View style={{
					flex: 2.2, 
					backgroundColor: 'grey',
					paddingLeft: 50,
					}}>
					<Text 
						style={{
							paddingTop: 40,
							fontSize: 30,
							color: '#000000',
						}}>
						You tried to submit the data
					</Text>
					<Text
						style={{
							fontSize: 30,
							color: '#000000',
						}}>
						it didn't work
					</Text>
				</View>
				
				<Text style={{padding: 10, fontSize: 32}}>
					{this.props.text}
				</Text>
				
			</View>
			


		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
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
	buttonText: {
		fontFamily: 'HelveticaNeue-CondensedBold',
		color: '#000000',
		fontSize: 20
	},
});

export default Fourth