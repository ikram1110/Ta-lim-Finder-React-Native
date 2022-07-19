import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleBar from '../components/TitleBar';

const Help = ({navigation}) => {
  return (
    <View>
      <TitleBar title={'Help'} nav={navigation} />
      <View style={styles.wrapHelp}>
        <View style={styles.wrapView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/menu/home.png')}
          />
          <Text style={styles.text}>
            Digunakan untuk melihat jadwal ta'lim mendatang
          </Text>
        </View>
        <View style={styles.wrapView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/menu/nearby.png')}
          />
          <Text style={styles.text}>
            Digunakan untuk mencari lokasi ta'lim yang berada dalam radius 1 km
          </Text>
        </View>
        <View style={styles.wrapView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/menu/search.png')}
          />
          <Text style={styles.text}>
            Digunakan untuk mencari jadwal ta'lim berdasarkan hari dan awktu
          </Text>
        </View>
        <View style={styles.wrapView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/menu/menu.png')}
          />
          <Text style={styles.text}>Digunakan untuk membuka menu</Text>
        </View>
        <View style={styles.wrapView}>
          <Text style={styles.text}>
            Silahkan kirim umpan balik ke fadhilsuzaku@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  wrapHelp: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  wrapView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 14,
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    width: '98%',
  },
});
