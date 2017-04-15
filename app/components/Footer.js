import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'



export default class Footer extends Component {
  render() {
  	const {children, onPress} = this.props;
    return (
    	<TouchableOpacity style={styles.container} onPress={onPress}>
    		<Text style={styles.footer}>{children}</Text>
    	</TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 15,
		
	},
	footer: {
		textAlign: 'center',
		color: '#3fa14d',
		fontSize: 15,
	}
})