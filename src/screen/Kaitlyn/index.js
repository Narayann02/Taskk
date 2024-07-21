import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import Imagepath from '../../constant/Imagepath';
import Send from '../../assest/svg/Send.svg';
import Arrowicon from '../../assest/svg/Arrowicon.svg';

const Appliancesdata = [
  {
    id: 1,
    image: Imagepath.Kaitlyn,
    name: 'Kaitlyn',
    time: '3:02 PM',
    heading: 'Have a good one!',
  },
  {
    id: 2,
    image: Imagepath.Chloe,
    name: 'Kaitlyn',
    time: '2:58 PM',
    heading: 'Hello! Are you available for toni...',
  },
  {
    id: 3,
    image: Imagepath.Phoebe,
    name: 'Kaitlyn',
    time: '2:41 PM',
    heading: 'Good bye!',
  },
  {
    id: 4,
    image: Imagepath.Jack,
    name: 'Kaitlyn',
    time: '2:27 PM',
    heading: 'See you again!',
  },
];

const Kaitlyn = ({route}) => {
  const { chat } = route.params;

  return (
    <View style={{...StylesGloble.container}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#04BEFC',
            width: '100%',
            padding: 0,
            alignSelf: 'center',
            
         
          }}>
          <View style={{marginTop:0,top:20}}>
            <Header name={chat.name} />

            <Image
              source={Imagepath.Kaitlyn}
              style={{height: 45, width: 45, bottom: 55, left: 105}}
            />
          </View>
        </View>
      

        <View style={StylesGloble.marginscreen}>
          <View
            style={{
              height: 70,
              backgroundColor: '#E3EAEC',
              width: 237,
              marginTop: 30,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#3D115A',
                lineHeight: 18,
              }}>
              Hello, How can I help you for these services?
            </Text>
          </View>
          <Text
            style={{fontSize: 10, fontWeight: '400', color: '#888888', top: 5}}>
            2:55 PM
          </Text>

          <View
            style={{
              height: 70,
              backgroundColor: '#E3EAEC',
              justifyContent: 'center',
              width: 237,
              marginTop: 20,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#3D115A',
                lineHeight: 18,
              }}>
              Can I come over?
            </Text>
          </View>
          <Text
            style={{fontSize: 10, fontWeight: '400', color: '#888888', top: 5}}>
            2:55 PM
          </Text>

          <View
            style={{
              backgroundColor: '#04BEFC',
              height: 60,
              width: 120,
              alignSelf: 'flex-end',
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              marginTop: '15%',
              padding: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#3D115A',
                lineHeight: 18,
                textAlign: 'center',
              }}>
              K, I'm on my way
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 25,
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#E3EAEC',
                width: '37%',
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#888888',
                }}>
                Sat, 17/10
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#E3EAEC',
                width: '37%',
              }}
            />
          </View>

          <View
            style={{
              height: 70,
              justifyContent: 'center',
              backgroundColor: '#E3EAEC',
              width: 237,
              marginTop: 30,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#3D115A',
                lineHeight: 18,
              }}>
              Good morning, did you sleep well?
            </Text>
          </View>
          <Text
            style={{fontSize: 10, fontWeight: '400', color: '#888888', top: 5}}>
            2:55 PM
          </Text>

          <View
            style={{
              backgroundColor: '#04BEFC',
              height: 60,
              width: 120,
              alignSelf: 'flex-end',
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              marginTop: '15%',
              padding: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#3D115A',
                lineHeight: 18,
              }}>
              Good Morning
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '75%',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E3EAEC',
                height: 50,
                borderRadius: 8,
                backgroundColor: '#E3EAEC',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingRight: 10,
                width: '88%',
                bottom:8
              }}>
              <TextInput
                style={{width: '99%'}}
                placeholder="Write your message here"
              />
            </View>
            <TouchableOpacity style={{bottom:8}}>
              <Send />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Kaitlyn;
