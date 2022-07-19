import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TitleBar from '../components/TitleBar';
import ItemTalim from '../components/ItemTalim';
import axios from 'axios';

const TalimHariIni = ({navigation}) => {
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

  const [talim, setTalim] = useState([]);
  const [loadingTalim, setLoadingTalim] = useState(false);

  useEffect(() => {
    setLoadingTalim(true);
    axios
      .get(`${baseUrl}/talim/${arrDay[day]}`)
      .then(res => {
        setTalim(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    setLoadingTalim(false);
  }, []);
  return (
    <View>
      <TitleBar title={"Ta'lim Hari Ini"} nav={navigation} />
      <FlatList
        style={{
          marginTop: 20,
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
        data={talim}
        renderItem={({item}) => (
          <ItemTalim
            id={item.id}
            name={item.name}
            place={item.data_tempat.name}
            image={item.pic}
            nav={navigation}
          />
        )}
      />
    </View>
  );
};

export default TalimHariIni;

const styles = StyleSheet.create({});
