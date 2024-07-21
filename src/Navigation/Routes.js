import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from '../screen/Splashscreen';
import Login from '../screen/Login';
import SignupScreen from '../screen/SignupScreen';
import BottomTab from './BottomTab';
import Home from '../screen/Home';
import Category from '../screen/Category';
import Chat from '../screen/Chat';
import Profile from '../screen/Profile';
import Booking from '../screen/Booking';
import Kaitlyn from '../screen/Kaitlyn';
import OtherServices from '../screen/OtherServices';
import Appliances from '../screen/Appliances';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Appliances" component={Appliances} />
        <Stack.Screen name="Kaitlyn" component={Kaitlyn} />
        <Stack.Screen name="OtherServices" component={OtherServices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
