import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ItemHome from '../components/ItemHome';

const Home = ({navigation}) => {
  const baseUrl =
    'https://singular-gumdrop-eead17.netlify.app/.netlify/functions/api';
  const d = new Date();
  let day = d.getDay();
  const arrDay = [
    'minggu',
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu',
  ];

  const [talimHariIni, setTalimHariIni] = useState([]);
  const [loadingHariIni, setLoadingHariIni] = useState(false);
  const [talimBesok, setTalimBesok] = useState([]);
  const [loadingBesok, setLoadingBesok] = useState(false);
  const [ustadz, setUstadz] = useState([]);
  const [loadingUstadz, setLoadingUstadz] = useState(false);

  useEffect(() => {
    setLoadingHariIni(true);
    axios
      .get(`${baseUrl}/talim/${arrDay[day]}/5`)
      .then(res => {
        setTalimHariIni(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    setLoadingHariIni(false);
  }, []);

  useEffect(() => {
    setLoadingBesok(true);
    axios
      .get(`${baseUrl}/talim-mendatang/${arrDay[day]}/5`)
      .then(res => {
        setTalimBesok(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    setLoadingBesok(false);
  }, []);

  useEffect(() => {
    setLoadingUstadz(true);
    axios
      .get(`${baseUrl}/ustadz/5`)
      .then(res => {
        setUstadz(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    setLoadingUstadz(false);
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.wrapHeader}>
            <Text style={styles.caption}>Ta'lim Hari Ini</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('TalimHariIni')}>
              <Text style={styles.action}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.horizontalList}
            horizontal={true}
            data={talimHariIni}
            renderItem={({item}) => (
              <ItemHome
                id={item.id}
                image={item.pic}
                name={item.name}
                place={item.data_tempat.name}
                link={'DetailTalim'}
                nav={navigation}
              />
            )}
          />
          <View style={styles.wrapHeader}>
            <Text style={styles.caption}>Ta'lim Mendatang</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('TalimMendatang')}>
              <Text style={styles.action}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.horizontalList}
            horizontal={true}
            data={talimBesok}
            renderItem={({item}) => (
              <ItemHome
                id={item.id}
                image={item.pic}
                name={item.name}
                place={item.data_tempat.name}
                link={'DetailTalim'}
                nav={navigation}
              />
            )}
          />
          <View style={styles.wrapHeader}>
            <Text style={styles.caption}>Ustadz</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Ustadz')}>
              <Text style={styles.action}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.horizontalList}
            horizontal={true}
            data={ustadz}
            renderItem={({item}) => (
              <ItemHome
                id={item.id}
                name={item.name}
                image={item.picture}
                link={'DetailUstadz'}
                nav={navigation}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#e4f1fc',
    paddingBottom: 70,
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  caption: {
    color: '#000000',
    fontSize: 24,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  action: {
    backgroundColor: '#00A3FF',
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  horizontalList: {
    paddingLeft: 20,
  },
});
