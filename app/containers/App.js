import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from '../components/Input'
import List from '../components/List'
import { actionCreators } from '../redux/todoRedux'


const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onAddItem = (item) => {
      const {dispatch} = this.props;
      dispatch(actionCreators.add(item));
  }

  onRemoveItem = (index) => {
      const {dispatch} = this.props;
      dispatch(actionCreators.remove(index));
  }

  onToggleItem = (index) => {
      const {dispatch} = this.props;
      dispatch(actionCreators.toggle(index));
  }
  onRemoveCompleted = () => {
      const {dispatch, items} = this.props;
      // find toRemove
      var toRemove = [];
      for(i = 0; i < items.length; i++) {
        if(items[i].completed) toRemove.push(i);
      }
      dispatch(actionCreators.removeCompleted(toRemove));// indices of items to remove
  }
  render() {
    const {items} = this.props;
    return (
      <View style={styles.container}>
          <Title>To Do List</Title>
          <Input placeholder={'Enter an item!'} onSubmitEditing={this.onAddItem}></Input>
          <List style ={styles.list} items={items} onToggleItem={this.onToggleItem} onRemoveItem={this.onRemoveItem}/>
          <View style={styles.divider}/>
          <Footer onPress={this.onRemoveCompleted}>Remove completed items</Footer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})

export default connect(mapStateToProps)(App)
