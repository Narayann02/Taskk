import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import Imagepath from '../../constant/Imagepath';
import Yellowstar from '../../assest/svg/Yellowstar.svg';
import Heartico from '../../assest/svg/Heartico.svg';
import { Card } from 'react-native-paper';

const Appliancesdata = [
  {
    id: 1,
    image: Imagepath.Mechanic,
    tittle: 'Mechanic',
    name: 'Sumit Mahajan',
    price: '$1000/hr',
    rating: '4.6',
    review: '245 Review',
  },
  {
    id: 2,
    image: Imagepath.CarRegistration,
    tittle: 'Car Registration',
    name: 'Sumit Mahajan',
    price: '$1000/hr',
    rating: '4.6',
    review: '245 Review',
  },
  {
    id: 3,
    image: Imagepath.GeneralContractor,
    tittle: 'General Contractor',
    name: 'Sumit Mahajan',
    price: '$1000/hr',
    rating: '4.6',
    review: '245 Review',
  },

  {
    id: 4,
    image: Imagepath.Butler,
    tittle: 'Butler',
    name: 'Sumit Mahajan',
    price: '$1000/hr',
    rating: '4.6',
    review: '245 Review',
  },
];

const OtherServices = ({navigation}) => {
  return (
    <View style={{...StylesGloble.container}}>
      <View
        style={{
          backgroundColor: '#04BEFC',
          width: '100%',
          padding: '4%',
          alignSelf: 'center',
        }}>
        <Header name={'Other Services'} />
      </View>

      <FlatList
        data={Appliancesdata}
        style={{marginTop: 15, marginBottom: '10%',marginLeft:20,marginRight:20}}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <>
             <Card
          style={{
            height: 'auto',
            backgroundColor: '#ffffff',
            position: 'relative',
            padding: 12,
            width: '100%',
            marginVertical:8,
            borderColor:'#04BEFC',
            borderWidth:1,

          }}
          >
            <TouchableOpacity>
              <View
                style={{
                 
                  flexDirection: 'row',
                }}>
                <Image
                  source={item.image}
                  style={{height: 80, width: 80}}
                  resizeMode="cover"
                />
                <View style={{marginLeft: 18, width: '65%'}}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text style={StylesGloble.font16600black}>
                      {item.tittle}
                    </Text>
                    <Heartico />
                  </View>
                  <Text style={StylesGloble.font14500g6D6D6D}>{item.name}</Text>
                  <Text
                    style={{
                      ...StylesGloble.font14500g6D6D6D,
                      color: '#04BEFC',
                    }}>
                    {item.price}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Yellowstar />
                    <Text style={{...StylesGloble.font14500g6D6D6D, left: 2}}>
                      {item.rating}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#000000',
                        marginLeft: 8,
                      }}>
                      |
                    </Text>
                    <Text
                      style={{...StylesGloble.font14500g6D6D6D, marginLeft: 8}}>
                      {item.review}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            </Card>
          </>
        )}
      />
    </View>
  );
};

export default OtherServices;
