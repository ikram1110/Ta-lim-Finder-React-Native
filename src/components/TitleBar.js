import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TitleBar = props => {
  return (
    <View style={styles.backScreen}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.nav.goBack(null)}>
        <Image
          style={styles.imgButton}
          source={require('../../assets/images/menu/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default TitleBar;

const styles = StyleSheet.create({
  backScreen: {
    color: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 14,
    shadowColor: 'black',
    shadowOffset: {height: 3},
    elevation: 5,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 14,
  },
  imgButton: {
    width: 20,
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
});
