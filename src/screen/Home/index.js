import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Imagepath from '../../constant/Imagepath';
import {StylesGloble} from '../../helper/GlobleCss';
import Search from '../../assest/svg/Search.svg';
import Skystar from '../../assest/svg/Skystar.svg';
import {Card} from 'react-native-paper';

const PopularServicesdata = [
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
    name: 'Electrician',
  },
  {
    id: 4,
    image: Imagepath.Electrical,
    name: 'Electrician',
  },
];

const ServiceProvidersdata = [
  {
    id: 1,
    image: Imagepath.MaskotKota,
    name: 'Maskot Kota',
    profession: 'Plumber',
    rating: '4.8',
    tittle: 'Details',
  },
  {
    id: 2,
    image: Imagepath.ShamsJan,
    name: 'Shams Jan',
    profession: 'Electrician',
    rating: '4.8',
    tittle: 'Details',
  },
];

const Home = ({navigation}) => {
  return (
    <View style={{...StylesGloble.container}}>
      <View
        style={{
          backgroundColor: '#04BEFC',
          width: '100%',
          padding: '6%',
          alignSelf: 'center',
        }}>
        <Image
          source={Imagepath.FixsterLogo}
          style={{
            height: 45,
            width: 45,
            alignSelf: 'center',
            top: 0,
            backgroundColor: 'black',
          }}
          resizeMode="cover"
        />
      </View>
      <FlatList
        style={{marginBottom: '5%'}}
        data={[{name: 'sarr'}]}
        renderItem={({item}) => (
          <>
            <View>
              <Image
                source={Imagepath.Banner}
                style={{
                  height: 200,
                  width: 320,
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#E7E7E7',
                  backgroundColor: 'white',
                  height: 55,
                  width: '80%',
                  alignSelf: 'center',
                  bottom: 28,
                  borderRadius: 8,
                  
                }}>
                <Search style={{left: 10}} />

                <TextInput
                  style={{left: 15, width: '85%'}}
                  placeholder="Search here.."
                />
              </View>
            </View>

            <View style={StylesGloble.marginscreen}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={StylesGloble.font20700000000}>
                    Popular Services
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Category')}>
                  <Text
                    style={{
                      ...StylesGloble.font16500b000000,
                      color: '#04BEFC',
                      gap:50
                    }}>
                    View all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              style={{marginLeft: 20, marginRight: 20}}
              keyExtractor={(item, index) => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={PopularServicesdata}
              renderItem={({item, index}) => (
                <View style={{padding: 5}}>
                  <Card
                    style={{
                      height: 'auto',
                      backgroundColor: '#ffffff',
                      position: 'relative',
                      padding: 15,
                      width: '100%',
                      marginTop: 15,
                    }}>
                    <View style={{}}>
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
                    </View>
                  </Card>
                </View>
              )}
            />

            <View style={StylesGloble.marginscreen}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <View>
                  <Text style={StylesGloble.font20700000000}>
                    Service Providers
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Category')}>
                  <Text
                    style={{
                      ...StylesGloble.font16500b000000,
                      color: '#04BEFC',
                    }}>
                    View all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              style={{marginLeft: 18, marginRight: 18}}
              keyExtractor={(item, index) => index}
              // horizontal={true}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              data={ServiceProvidersdata}
              renderItem={({item, index}) => (
                <View style={{padding: 5}}>
                  <Card
                    style={{
                      height: 'auto',
                      backgroundColor: '#ffffff',
                      position: 'relative',
                      padding: 15,
                      width: '100%',
                      marginTop: 15,
                    }}>
                    <View style={{}}>
                      <View>
                        <TouchableOpacity
                          style={{padding: 3, marginHorizontal: 0}}>
                          <View>
                            <View style={{}}>
                              <Image
                                style={{
                                  alignSelf: 'center',
                                  top: 0,
                                  height: 120,
                                  width: 120,
                                  borderRadius: 8,
                                }}
                                source={item.image}
                              />
                              <Text
                                style={{
                                  ...StylesGloble.font165005D5D5D,

                                  top: 10,
                                }}>
                                {item.name}
                              </Text>

                              <Text
                                style={{
                                  ...StylesGloble.font14500g6D6D6D,

                                  top: 10,
                                }}>
                                {item.profession}
                              </Text>

                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',

                                  marginTop: 20,
                                }}>
                                <View style={{}}>
                                  <Skystar />
                                </View>

                                <View style={{bottom: 0}}>
                                  <Text
                                    style={{
                                      ...StylesGloble.font14500g6D6D6D,
                                      color: '#04BEFC',
                                      right: 4,
                                    }}>
                                    {item.rating}
                                  </Text>
                                </View>

                                <View
                                  style={{
                                    backgroundColor: '#04BEFC',
                                    height: 30,

                                    width: 80,

                                    borderRadius: 5,
                                  }}>
                                  <Text
                                    style={{
                                      ...StylesGloble.font14500g6D6D6D,
                                      color: '#ffffff',
                                      textAlign: 'center',
                                      top: 5,
                                    }}>
                                    {item.tittle}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Card>
                </View>
              )}
            />
          </>
        )}
      />
    </View>
  );
};

export default Home;
