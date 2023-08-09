/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNaviagtion from './AppNavigation/TabNavigation';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NfcReader from './Components/NfcReader';
import { WithSplashScreen } from './Components/WithSplashScreen';

const RootStack = createNativeStackNavigator()

function App(): JSX.Element {

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
      setIsAppReady(true);
    });

  return (
    <WithSplashScreen isAppReady = {isAppReady}>
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name='main' component={TabNaviagtion} />      
        <RootStack.Screen name="NFC" component={NfcReader} options={{ animation: 'slide_from_bottom' }} />
      </RootStack.Navigator>
    </NavigationContainer>
    </WithSplashScreen>
  );
}

export default App;
