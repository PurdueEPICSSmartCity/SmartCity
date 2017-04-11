import React, {Component} from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image
}from 'react-native'
import {
	StackNavigator, 
} from 'react-navigation'


class First extends Component {
	
	constructor() {
		super()
		
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
				
				<Text // Text Title
					style={{
						flex: 0.4,
						textAlign: 'center',
						paddingTop: 40,
						fontSize: 40,
						fontFamily: 'Cochin',	//Doesn't change anything
						fontWeight: 'bold',
						color: '#000000',
						backgroundColor: 'white',
					}}>
					SMART CITY
				</Text>
				
				<Text // Text Slogan
					style={{
						flex: 0.2,
						textAlign: 'center',
						paddingBottom: 5,
						fontSize: 15,
						color: 'hsl(900, 10%, 70%)', // hue-saturation-lightness
						backgroundColor: 'white'
					}}>
					-A smarter city is a safer city-
				</Text>
				
				<View // Button Report a Pothole
					style ={{
						flex: 1, 
						flexDirection: 'row', 
						backgroundColor: 'white', 
						paddingBottom: 180, 
						paddingTop: 100, 
						justifyContent: 'center'
					}}>
					<View style={{flex: 1, alignItems: 'center'}}>
						<TouchableHighlight onPress={() => this.navigate('SecondPage')} style={styles.button}>
							<View style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Report a Pothole</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				
				<View // Button Contact the City
					style ={{
						flex: 0.2, 
						flexDirection: 'row', 
						backgroundColor: 'white', 
						justifyContent: 'center'
					}}>
					<View style={{flex: 1, alignItems: 'center'}}>
						<TouchableHighlight onPress={() => this.navigate('ThirdPage')} 
							style={{
								paddingLeft: 10,
								paddingRight: 10,
								backgroundColor: '#a9a9a9',
								borderRadius: 5,
							}}>
							<View style={styles.buttonContainer}>
								<Text style={styles.CityButtonText}>Contact the City</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
			
			</View>
		)
	}
}

const styles = StyleSheet.create({
	CityButtonText: {
		fontFamily: 'HelveticaNeue-CondensedBold',
		color: '#000000',
		fontSize: 15,
		textDecorationLine: "underline",
	},
	button: {
		width: 250,
		height: 100,
		backgroundColor: '#32cd32',
		borderRadius: 10,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		fontFamily: 'HelveticaNeue-CondensedBold',
		color: '#000000',
		fontSize: 20
	},
	contactCity: {
		textAlign: 'center',
	}
})

export default First
