import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url.
        </Text>
        
        <ScrollView style = {styles.paragraph}>
        
        </ScrollView>
        <View>
          <TextInput style = {styles.textinput}
          placeholder='note'
          placeholderTextColor ='white'
          underlineColorAndroid = 'transparent'
          >
          
          </TextInput>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  header: {
    backgroundColor : '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth : 10,
    borderBottomColor : '#ddd',
  },
  headerText:{
    color: 'white',
    fontSize : 18,
    padding: 26,
  },
  scrollContainer:{
    flex: 1,
    marginBottom : 100,
  },
  footer: {
    position: 'absolute',
    bottom:0,
    left : 0,
    right: 0,
    zIndex : 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color : '#fff',
    padding: 20,
    backgroundColor : '#252525',
    borderBottomWidth: 2,
    borderTopColor : '#ededed'
  },
  addButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    zIndex : 11,
    backgroundColor : '#E91E63',
    width: 90,
    height: 90,
    borderRadius:50,
    alignItems :'center',
    justifyContent : 'center',
    elevation: 8,
  },
  addButtonText:{
    color :'#fff',
    fontSize :24,
  },
  
});
