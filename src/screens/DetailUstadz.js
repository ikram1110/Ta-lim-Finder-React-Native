import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ItemTalim from '../components/ItemTalim';

const DetailUstadz = ({route, navigation}) => {
  const baseUrl =
    'https://singular-gumdrop-eead17.netlify.app/.netlify/functions/api';

  const {id} = route.params;
  const [detailData, setDetailData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/ustadz-by-id/${id}`)
      .then(res => {
        console.log(res.data);
        setDetailData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  return (
    <View>
      <View>
        <Image
          style={styles.img}
          resizeMode={'cover'}
          source={{uri: detailData.picture}}
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack(null)}>
          <Image
            style={styles.imgButton}
            source={require('../../assets/images/menu/back.png')}
          />
        </TouchableOpacity>
        <View style={styles.wrapDetail}>
          <Text style={styles.caption}>{detailData.name}</Text>
          <Text style={styles.desc}>Tanya ustadz : {detailData.phone}</Text>
        </View>
      </View>
      <FlatList
        style={{
          marginTop: 10,
          height: 300,
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
        data={detailData.talim}
        renderItem={({item}) => (
          <ItemTalim
            id={item.id}
            name={item.name}
            place={item.tempat}
            image={item.pic}
            nav={navigation}
          />
        )}
      />
    </View>
  );
};

export default DetailUstadz;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 10,
    top: 14,
  },
  imgButton: {
    width: 20,
    resizeMode: 'contain',
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    height: 250,
  },
  wrapDetail: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  caption: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  desc: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
});
