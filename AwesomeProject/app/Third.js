import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput
}from 'react-native'
import {
	StackNavigator, 
} from 'react-navigation'

class Third extends Component {
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
					backgroundColor: 'white',
					paddingLeft: 50,
					}}>
					<Text 
						style={{
							paddingTop: 40,
							fontSize: 30,
							color: '#000000',
						}}>
						Office: (764) 775-5242
					</Text>
					<Text
						style={{
							fontSize: 30,
							color: '#000000',
						}}>
						TTY: 711
					</Text>
					<Text 
						style={{
							fontSize: 30,
							color: '#000000',
						}}>
						Email Us
					</Text>
					<Text
						style={{
							fontSize: 30,
							color: '#000000',
						}}>
						Contact the Department
					</Text>
					<Text 
						style={{
							fontSize: 30,
							color: '#000000',
						}}>
						7 a.m. - 3:30 p.m.
					</Text>
				</View>
				
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

export default Third