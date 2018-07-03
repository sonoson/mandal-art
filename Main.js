import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
export default class Note extends Component {
  render() {
    return (
      
      <View key = {this.prop.keyval} style = {styles.note}> 
      
        <Text style = {styles.noteText}>{this.props.val.date}</Text>
        <Text style = {styles.noteText}>{this.props.val.note}</Text>
      
        <TouchableOpacity onPress = {this.props.deleteMethod} style = {styles.noteDelete}>
          <Text style = {styles.noteDeleteText}> D </Text>
        </TouchableOpacity>
        
      </View>
      
      );
  }
}

const styles = StyleSheet.create({
  
});