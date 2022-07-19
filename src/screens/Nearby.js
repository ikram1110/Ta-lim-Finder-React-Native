// import {Dimensions, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import axios from 'axios';

// // const styles = StyleSheet.create({
// //   container: {
// //     ...StyleSheet.absoluteFillObject,
// //     height: 400,
// //     width: 400,
// //     justifyContent: 'flex-end',
// //     alignItems: 'center',
// //   },
// //   map: {
// //     ...StyleSheet.absoluteFillObject,
// //   },
// // });

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     // width: Dimensions.get('window').width,
//     // height: Dimensions.get('window').height,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// const Nearby = () => {
//   const baseUrl =
//     'https://singular-gumdrop-eead17.netlify.app/.netlify/functions/api';

//   const [masjid, setMasjid] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${baseUrl}/masjid`)
//       .then(res => {
//         setMasjid(res.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     setLoading(false);
//   }, []);
//   return (
//     // <View style={styles.container}>
//     //   {/* <MapView style={styles.map} provider={PROVIDER_GOOGLE} /> */}
//     //   <MapView
//     //     provider={PROVIDER_GOOGLE}
//     //     style={styles.map}
//     //     region={{
//     //       latitude: -5.141654,
//     //       longitude: 119.509886,
//     //       latitudeDelta: 0.015,
//     //       longitudeDelta: 0.0121,
//     //     }}>
//     //     {masjid.map((marker, index) => {
//     //       const geo = marker.address.geo;
//     //       return (
//     //         <Marker
//     //           key={index}
//     //           coordinate={{
//     //             latitude: parseFloat(geo.lat),
//     //             longitude: parseFloat(geo.lng),
//     //           }}
//     //           title={marker.title}
//     //           description={marker.description}
//     //         />
//     //       );
//     //     })}
//     //   </MapView>
//     // </View>
//     <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//         style={styles.map}
//         region={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.015,
//           longitudeDelta: 0.0121,
//         }}></MapView>
//     </View>
//   );
// };

// export default Nearby;

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Nearby => {
  const [data, setData] = useState([]);

  function print(obj) {
    console.log(JSON.stringify(obj, null, 4));
  }

  const getData = async value => {
    try {
      const response = await fetch(
        `https://singular-gumdrop-eead17.netlify.app/.netlify/functions/api/masjid`,
      );
      const json = await response.json();
      print(json);
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: -5.141654,
          longitude: 119.509886,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {data.map((marker, index) => {
          const geo = marker.address.geo;
          print(`lat: ${geo.lat}, long: ${geo.lng}`);
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
