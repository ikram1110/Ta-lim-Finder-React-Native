import {
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Menu = ({navigation}) => {
  const handleHelp = () => {
    console.log('Help Pressed');
    navigation.navigate('Help');
  };
  const handleAbout = () => {
    console.log('About Pressed');
    navigation.navigate('About');
  };
  const handleExit = () => {
    console.log('Exit Pressed');
    BackHandler.exitApp();
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleHelp} style={styles.buttonMenu}>
        <Image
          style={styles.buttonImg}
          source={require('../../assets/images/menu/help.png')}
        />
        <View>
          <Text style={styles.buttonCaption}>Help</Text>
          <Text style={styles.buttonDescription}>
            Petunjuk menggunakan aplikasi
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAbout} style={styles.buttonMenu}>
        <Image
          style={styles.buttonImg}
          source={require('../../assets/images/menu/about.png')}
        />
        <View>
          <Text style={styles.buttonCaption}>About</Text>
          <Text style={styles.buttonDescription}>Tentang Aplikasi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleExit} style={styles.buttonMenu}>
        <Image
          style={styles.buttonImg}
          source={require('../../assets/images/menu/exit.png')}
        />
        <View>
          <Text style={styles.buttonCaption}>Exit</Text>
          <Text style={styles.buttonDescription}>Keluar dari aplikasi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#e4f1fc',
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  buttonMenu: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  buttonImg: {
    marginRight: 14,
  },
  buttonCaption: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  buttonDescription: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
});
