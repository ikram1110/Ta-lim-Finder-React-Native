import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import axios from 'axios';

const Nearby = () => {
  const baseUrl =
    'https://singular-gumdrop-eead17.netlify.app/.netlify/functions/api';

  const [masjid, setMasjid] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/masjid`)
      .then(res => {
        setMasjid(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    setLoading(false);
  }, []);
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -5.141654,
          longitude: 119.509886,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {masjid.map((marker, index) => {
          const geo = marker.address.geo;
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(geo.lat),
                longitude: parseFloat(geo.lng),
              }}
              title={marker.title}
              description={marker.description}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default Nearby;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
