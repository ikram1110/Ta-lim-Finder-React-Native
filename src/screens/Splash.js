import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  });
  return (
    <View style={styles.backScreen}>
      <Image source={logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  backScreen: {
    backgroundColor: '#7EC3EA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
