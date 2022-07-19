import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ItemUstadz = ({item, nav}) => {
  return (
    <TouchableOpacity
      style={styles.wrapItem}
      onPress={() => nav.navigate('DetailUstadz', {id: item.id})}>
      <View style={styles.wrapImg}>
        <Image style={styles.imageItem} source={{uri: item.picture}} />
      </View>
      <Text style={styles.captionItem}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default ItemUstadz;

const styles = StyleSheet.create({
  wrapItem: {
    marginRight: 20,
    width: '47%',
    marginBottom: 12,
  },
  wrapImg: {
    backgroundColor: 'white',
    marginBottom: 6,
    shadowColor: 'black',
    borderRadius: 10,
    shadowOffset: {height: 5},
    shadowRadius: 3.5,
    elevation: 4,
  },
  imageItem: {
    width: '100%',
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: 10,
  },
  captionItem: {
    color: '#000000',
    fontSize: 12,
  },
  textItem: {
    fontSize: 10,
    width: 100,
  },
});
