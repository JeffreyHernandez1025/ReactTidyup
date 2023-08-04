import Tracking from '../Components/Tracking';
import Donate from '../Components/Donate';
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
        component={Tracking}
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
          // Make a onpress to make it call the function like line 76 in NfcReader component
          tabBarLabel: 'NFC',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="nfc" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Donate"
        component={Donate}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'hand-holding-heart'} size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
