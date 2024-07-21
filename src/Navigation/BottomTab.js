import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, Modal} from 'react-native';
import Imagepath from '../constant/Imagepath';
import Profile from '../screen/Profile';
import Home from '../screen/Home';
import Booking from '../screen/Booking';
import Homeopen from '../assest/svg/Homeopen.svg';
import Categoryicon from '../assest/svg/Categoryicon.svg';
import ProfilOpen from '../assest/svg/ProfilOpen.svg';
import Profileicn from '../assest/svg/Profileicn.svg';
import CalendarClose from '../assest/svg/CalendarClose.svg';
import ProfileClose from '../assest/svg/ProfileClose.svg';
import Homeicon from '../assest/svg/Homeicon.svg';
import {StylesGloble} from '../helper/GlobleCss';
import Category from '../screen/Category';
import Chat from '../screen/Chat';
import Messageicon from '../assest/svg/Messageicon.svg';
import Bookingicon from '../assest/svg/Bookingicon.svg';

const Tab = createBottomTabNavigator();

function BottomTab({navigation}) {
  const [focus, setfocus] = useState(false);

  return (
    <>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          activeTintColor: '#ffffff',
          inactiveTintColor: '#d9d9d9',
          activeColor: '#ffffff',
          inactiveColor: '#443f47',
          tabBarShowLabel: true,

          tabBarStyle: {
            backgroundColor: '#ffffff',

            height: 60,
            activeTintColor: '#ffffff',
          },
          tabBarLabelStyle: {
            fontSize: 13,
            color: '#FFFFFF',
          },
        }}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          activeColor={'#ffffff'}
          screenOptions={{
            headerShown: false,
          }}
          inactiveColor={'#443f47'}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 68,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {focused ? <Homeicon /> : <Homeopen />}

                  <Text
                    style={{
                      color: focused ? '#04BEFC' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'Category'}
          component={Category}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 80,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {focused ? <Categoryicon /> : <Categoryicon />}

                  <Text
                    style={{
                      color: focused ? '#04BEFC' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Category
                  </Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name={'Chat'}
          component={Chat}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 70,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {focused ? <Messageicon /> : <Messageicon />}
                  <Text
                    style={{
                      color: focused ? '#04BEFC' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Chat
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'Booking'}
          component={Booking}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 70,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {focused ? <Bookingicon /> : <Bookingicon />}
                  <Text
                    style={{
                      color: focused ? '#04BEFC' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Booking
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'Profile'}
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    height: 80,
                    width: 80,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {focused ? <Profileicn /> : <Profileicn />}
                  <Text
                    style={{
                      color: focused ? '#04BEFC' : '#5D5D5D',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Profile
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BottomTab;
