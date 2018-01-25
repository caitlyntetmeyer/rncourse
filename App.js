/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    placeName: ''
  }
  // Create a method where the "this" keyword will always refer to the class App:
  placeNameChangedHandler = (event) => {
    // Set the state to whatever the user enters:
    this.setState({
      placeName: val // val is the value the user enters.
    });
  }

  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          placeholder="Enter text here"
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
          />
          <Button title="Add" style={styles.placeButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Style the View above:
  container: {
    flex: 1, // Use Flexbox to take all available space on the main axis
    padding: 26, 
    backgroundColor: "#fff",
    alignItems: 'center',
    // Position the content on the main axis:
    justifyContent: 'flex-start' // child elements of the wrapping element are positioned at the start
  },
  // Style the wrapper for the text field and button:
  inputContainer: {
    // flex: 1, // take full available space in the container
    width: "100%", // take the full available width
    flexDirection: "row", // set elements from L to R
    justifyContent: "space-between", // 1st element sits on L, 2nd element sits on R, there's space between them
    alignItems: "center" // aligns "ADD" center inside the button
  },
  // Style the text field:
  placeInput: {
    width: "70%"
  },
  // Style the button:
  placeButton: {
    width: "30%"
  }
});
