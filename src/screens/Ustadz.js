import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TitleBar from '../components/TitleBar';
import axios from 'axios';
import ItemUstadz from '../components/ItemUstadz';

const Ustadz = ({navigation}) => {
  const baseUrl =
    'https://singular-gumdrop-eead17.netlify.app/.netlify/functions/api';

  const [ustadz, setUstadz] = useState([]);
  const [loadingUstadz, setLoadingUstadz] = useState(false);

  useEffect(() => {
    setLoadingUstadz(true);
    axios
      .get(`${baseUrl}/ustadz`)
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
      <TitleBar title={'Ustadz'} nav={navigation} />
      <FlatList
        style={styles.list}
        numColumns={2}
        data={ustadz}
        renderItem={({item}) => <ItemUstadz item={item} nav={navigation} />}
      />
    </View>
  );
};

export default Ustadz;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginBottom: 60,
  },
});
