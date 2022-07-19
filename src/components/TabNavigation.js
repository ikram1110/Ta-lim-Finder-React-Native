import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Nearby from '../screens/Nearby';
import Search from '../screens/Search';
import Menu from '../screens/Menu';
import {Image, StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          height: 57,
          borderRadius: 30,
          ...styles.shadow,
        },
        headerTitleAlign: 'center',
      }}
      sceneContainerStyle={{backgroundColor: '#e4f1fc'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
              <Image
                source={require('../../assets/images/menu/home.png')}
                resizeMode="contain"
                style={{
                  width: 16,
                  height: 16,
                  tintColor: focused ? '#00A3FF' : '#748c49',
                }}
              />
              <Text
                style={{color: focused ? '#00A3FF' : '#748c49', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Nearby"
        component={Nearby}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
              <Image
                source={require('../../assets/images/menu/nearby.png')}
                resizeMode="contain"
                style={{
                  width: 16,
                  height: 16,
                  tintColor: focused ? '#00A3FF' : '#748c49',
                }}
              />
              <Text
                style={{color: focused ? '#00A3FF' : '#748c49', fontSize: 12}}>
                Nearby
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
              <Image
                source={require('../../assets/images/menu/search.png')}
                resizeMode="contain"
                style={{
                  width: 16,
                  height: 16,
                  tintColor: focused ? '#00A3FF' : '#748c49',
                }}
              />
              <Text
                style={{color: focused ? '#00A3FF' : '#748c49', fontSize: 12}}>
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
              <Image
                source={require('../../assets/images/menu/menu.png')}
                resizeMode="contain"
                style={{
                  width: 16,
                  height: 16,
                  tintColor: focused ? '#00A3FF' : '#748c49',
                }}
              />
              <Text
                style={{color: focused ? '#00A3FF' : '#748c49', fontSize: 12}}>
                Menu
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
