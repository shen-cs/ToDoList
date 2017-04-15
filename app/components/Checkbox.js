import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default class Checkbox extends Component {
 
  toggle = () => {
  	 const {onToggleItem} = this.props;
  	 onToggleItem();
  }

  render() {
  	const {completed} = this.props;
    return (
    	<TouchableOpacity style={styles.box} onPress={this.toggle}>
    		<View style={[styles.check, completed ? {opacity: 1} : {opacity: 0}]}/>
    	</TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
	box: {
		width: 20,
		height: 20,
		borderWidth: 2,
		margin: 5,
		borderColor: '#000',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

	},
	check: {
		width: 12,
		height: 12,
		backgroundColor: '#000',
	    opacity: 0,
	},
})