import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ItemHome = ({id, name, image, place, link, nav}) => {
  return (
    <TouchableOpacity
      style={styles.wrapItem}
      onPress={() => nav.navigate(link, {id: id})}>
      <View style={styles.wrapImg}>
        <Image style={styles.imageItem} source={{uri: image}} />
      </View>
      <Text style={styles.captionItem}>{name}</Text>
      <Text style={styles.textItem}>{place}</Text>
    </TouchableOpacity>
  );
};

export default ItemHome;

const styles = StyleSheet.create({
  wrapItem: {
    marginRight: 20,
  },
  wrapImg: {
    backgroundColor: 'white',
    marginBottom: 6,
    shadowColor: 'black',
    borderRadius: 10,
    shadowOffset: {height: 5},
    shadowRadius: 3.5,
    elevation: 3,
  },
  imageItem: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  captionItem: {
    color: '#000000',
    fontSize: 12,
    width: 100,
  },
  textItem: {
    fontSize: 10,
    width: 100,
  },
});
