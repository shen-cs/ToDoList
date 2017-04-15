import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'



export default class List extends Component {

  renderItem = (item, i) => {
  	const {onToggleItem, onRemoveItem, items} = this.props;
  	 return (
  	 	<View key={i} style={styles.item}> 
  	 		<Text style={styles.text}>	
  	 		 {item.text}
  	 		</Text>
  	 		<Checkbox onToggleItem={() => onToggleItem(i)} completed={item.completed}/>
  	 		<TouchableOpacity style={styles.cancelBtn} onPress={() => onRemoveItem(i)}>
  	 			<Text style={styles.cancel}>&times;</Text>
  	 		</TouchableOpacity>
  	 	</View>
  	 )
  }
  render() { 
  	const {items, completed} = this.props;
    return (
    	<ScrollView>
    		{items.map(this.renderItem)}
    	</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
	item: {
		marginBottom: 1,
		padding: 10,
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	text: {
		flex: 1,
		marginLeft: 5,
		fontSize: 15,
	},
	cancelBtn: {
		width: 20,
		height: 20,
		marginLeft: 5,
		flexDirection:'row',
		alignItems: 'center',
	},
	cancel: {
		fontSize: 30,
	},
})