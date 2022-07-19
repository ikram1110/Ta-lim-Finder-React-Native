import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './components/TabNavigation';
import Help from './screens/Help';
import About from './screens/About';
import Ustadz from './screens/Ustadz';
import DetailUstadz from './screens/DetailUstadz';
import TalimHariIni from './screens/TalimHariIni';
import DetailTalim from './screens/DetailTalim';
import TalimMendatang from './screens/TalimMendatang';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <TabNavigation /> */}
      <Stack.Navigator
        initialRouteName="CoreApp"
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: '#e4f1fc'},
        }}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="CoreApp" component={TabNavigation} />
        <Stack.Screen name="TalimHariIni" component={TalimHariIni} />
        <Stack.Screen name="TalimMendatang" component={TalimMendatang} />
        <Stack.Screen name="DetailTalim" component={DetailTalim} />
        <Stack.Screen name="Ustadz" component={Ustadz} />
        <Stack.Screen name="DetailUstadz" component={DetailUstadz} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
