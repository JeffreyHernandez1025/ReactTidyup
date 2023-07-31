import Home from '../Components/Home';
import Map from '../Components/Map';
import NfcReader from '../Components/NfcReader';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tabs = createBottomTabNavigator();

export default function TabNaviagtion(): JSX.Element {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="NFC"
        component={NfcReader}
        options={{
          tabBarLabel: 'NFC',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="nfc" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'hand-holding-heart'} size={30} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
