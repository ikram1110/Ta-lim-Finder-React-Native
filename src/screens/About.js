import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleBar from '../components/TitleBar';

const About = ({navigation}) => {
  return (
    <View>
      <TitleBar title={'About'} nav={navigation} />
      <View style={styles.wrapAbout}>
        <Text style={styles.title}>Ta'lim Finder</Text>
        <Text style={styles.desc}>v2.3.7</Text>
        <Image
          style={{marginBottom: 20}}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.desc}>
          Aplikasi ini digunakan untuk mencari informasi jadwal dan lokasi
          ta'lim daerah makassar dan sekitarnya.
        </Text>
        <Text style={styles.desc}>
          Aplikasi ini dibuat untuk memenuhi tesis Pendidikan Teknologi dan
          Komputer
        </Text>
        <Text style={styles.desc}>Universitas Negeri Makassar</Text>
        <Image
          style={styles.shape}
          source={require('../../assets/images/mee.png')}
        />
        <Text style={styles.desc}>Muhammad Fadhil Fikri</Text>
        <Text style={styles.desc}>201052003014</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  wrapAbout: {
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  desc: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'center',
  },
  shape: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 10,
  },
});
