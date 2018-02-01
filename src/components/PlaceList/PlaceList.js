import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {

    // Render array of places that user enters:
    const placesOutput = props.places.map((place, i) => (
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPressed={() => props.onItemDeleted(i)} />
      ));
    return (
        <View style={styles.listContainer}>{placesOutput}</View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;
