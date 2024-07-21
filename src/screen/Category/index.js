import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import Imagepath from '../../constant/Imagepath';
import {Card} from 'react-native-paper';

const servicedata = [
  {
    id: 1,
    image: Imagepath.Painting,
    name: 'Painting',
  },
  {
    id: 2,
    image: Imagepath.Plumbing,
    name: 'Plumbing',
  },
  {
    id: 3,
    image: Imagepath.Electrical,
    name: 'Electrical',
  },
];

const servicedatatwo = [
  {
    id: 1,
    image: Imagepath.Appliances,
    name: 'Appliance',
  },
  {
    id: 2,
    image: Imagepath.Carpentary,
    name: 'Carpentry',
  },
  {
    id: 3,
    image: Imagepath.Gardening,
    name: 'Gardening',
  },
];

const servicedatathree = [
  {
    id: 1,
    image: Imagepath.Renovation,
    name: 'Renovation',
  },
  {
    id: 2,
    image: Imagepath.OtherServices,
    name: 'Other Services',
  },
];

const Category = ({navigation}) => {
  return (
    <View style={{...StylesGloble.container}}>
      <View
        style={{
          backgroundColor: '#04BEFC',
          width: '100%',
          padding: '3%',
          alignSelf: 'center',
        }}>
        <Header name={'All Services'} />
      </View>

      <FlatList
        style={{marginLeft: 20, marginRight: 20}}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={servicedata}
        renderItem={({item, index}) => (
          <View style={{padding: 5}}>
            <Card
              style={{
                height: 'auto',
                backgroundColor: '#ffffff',
                position: 'relative',
                padding: 18,
                width: '100%',
                marginTop: 25,
              }}>
              <View style={{}}>
                <View>
                  <Image
                    source={item.image}
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 8,
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: '#101010',
                        fontSize: 14,
                        fontWeight: '700',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        )}
      />

      <FlatList
        style={{marginLeft: 20, marginRight: 20, bottom: 50}}
        keyExtractor={(item, index) => index}
        // horizontal={true}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        data={servicedatatwo}
        renderItem={({item, index}) => (
          <View style={{padding: 5}}>
            <Card
              style={{
                height: 'auto',
                backgroundColor: '#ffffff',
                position: 'relative',
                padding: 17,
                width: '100%',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (item.name === 'Appliance') {
                    navigation.navigate('Appliances');
                  }
                }}>
                <View>
                  <Image
                    source={item.image}
                    style={{height: 60, width: 60, borderRadius: 8}}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: '#101010',
                        fontSize: 14,
                        fontWeight: '700',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          </View>
        )}
      />

      <FlatList
        style={{marginLeft: 20, marginRight: 20, bottom: 80}}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={servicedatathree}
        renderItem={({item, index}) => (
          <View style={{padding: 5}}>
            <Card
              style={{
                height: 'auto',
                backgroundColor: '#ffffff',
                position: 'relative',
                padding: 13,
                width: '100%',
                marginTop: 0,
              }}>
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  if (item.name === 'Other Services') {
                    navigation.navigate('OtherServices');
                  }
                }}>
           
                <View>
                  <Image
                    source={item.image}
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 8,
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: '#101010',
                        fontSize: 14,
                        fontWeight: '700',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

export default Category;
