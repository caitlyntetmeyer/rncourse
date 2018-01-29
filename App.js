import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  state = {
    // What the user inputs will be added to the "places" array:
    places: []
  };

  // When user presses button, add their text input to an array (which will eventually be displayed on the page): 
  placeAddedHandler = placeName => {
    // Add user's entry to the array:
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  }

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return{
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      }; 
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
        places={this.state.places} 
        onItemDeleted={this.placeDeletedHandler} />
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
  }
});
