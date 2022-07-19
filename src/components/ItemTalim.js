import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ItemTalim = ({id, name, place, image, nav}) => {
  return (
    <TouchableOpacity
      style={styles.wrapItem}
      onPress={() => nav.navigate('DetailTalim', {id: id})}>
      <View style={styles.wrapImg}>
        <Image style={styles.imageItem} source={{uri: image}} />
      </View>
      <View style={styles.wrapTxt}>
        <Text style={styles.captionItem}>{name}</Text>
        <Text style={styles.textItem}>{place}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemTalim;

const styles = StyleSheet.create({
  wrapItem: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  wrapImg: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 12,
    shadowColor: 'black',
    borderRadius: 10,
    shadowOffset: {height: 5},
    shadowRadius: 3.5,
    elevation: 4,
  },
  imageItem: {
    width: 50,
    height: 50,
    aspectRatio: 1 / 1,
    borderRadius: 10,
  },
  wrapTxt: {
    flex: 5,
    flexBasis: 'auto',
  },
  captionItem: {
    color: '#000000',
    fontSize: 16,
  },
  textItem: {
    fontSize: 12,
  },
});
