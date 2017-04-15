import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'


export default class Input extends Component {
  state = {
  	text: '',
  }
  onChangeText = (text) => {
  	  this.setState({text});
  }
  onSubmit = () => {
      const {onSubmitEditing} = this.props;
      const {text} = this.state;
      if(!text) return
      onSubmitEditing({text: text.trim(), completed: false});
      this.setState({text: ''});
  }
  render() {
  	const {placeholder} = this.props;
  	const {text} = this.state;
    return (
    	<TextInput style={styles.input}
    		 	   placeholder={placeholder} 
    		 	   value={text}
    		 	   onChangeText={this.onChangeText}
    		 	   onSubmitEditing={this.onSubmit}/>
    )
  }
}

const styles = StyleSheet.create({
	input: {
		padding: 15,
		height: 50,
	},
})