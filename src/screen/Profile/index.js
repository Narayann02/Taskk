import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import Imagepath from '../../constant/Imagepath';
import Yellowstar from '../../assest/svg/Yellowstar.svg';
import MasonryList from '@react-native-seoul/masonry-list';
import {Card} from 'react-native-paper';

const Appliancesdata = [
  {
    id: 1,
    image: Imagepath.Amit,
    tittle: 'Appliance Expert',
    name: 'Amit Mishra',
    address: 'Uttam Nagar,New Delhi-110059',
    rating: '4.6',
    review: '245 Review',
    heading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

const imagedata = [
  {
    id: 1,
    image: Imagepath.Experrofile,
  },
  {
    id: 2,
    image: Imagepath.ExpertProfiletwo,
  },
  {
    id: 3,
    image: Imagepath.ExpertProfiletin,
  },
  {
    id: 4,
    image: Imagepath.Vaccum,
  },
  {
    id: 5,
    image: Imagepath.Appliances,
  },
  {
    id: 6,
    image: Imagepath.Exp,
  },
];

const Profile = ({navigation}) => {
  return (
    <View style={{...StylesGloble.container}}>
      <FlatList
        style={{marginBottom: '5%'}}
        data={[(name = 'bjb')]}
        renderItem={({item}) => (
          <>
            <View style={{}}>
              <View
                style={{
                  backgroundColor: '#04BEFC',
                  width: '100%',
                  padding: '3%',
                  alignSelf: 'center',
                }}>
                <Header name={'Expert Profile'} />
              </View>
              <View>
                <FlatList
                  data={Appliancesdata}
                  style={{marginTop: 15, marginBottom: '5%'}}
                  keyExtractor={(item, index) => index}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <View
                      style={{
                        paddingVertical: 5,
                        marginLeft: 20,
                        marginRight: 20,
                      }}>
                      <Card
                        style={{
                          height: 'auto',
                          backgroundColor: '#ffffff',
                          position: 'relative',
                          padding: 15,
                          width: '100%',
                          marginTop: 10,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={item.image}
                            style={{height: 80, width: 80}}
                            resizeMode="cover"
                          />
                          <View style={{marginLeft: 18}}>
                            <Text style={StylesGloble.font14500g6D6D6D}>
                              {item.tittle}
                            </Text>
                            <Text style={StylesGloble.font16600black}>
                              {item.name}
                            </Text>
                            <Text style={{...StylesGloble.font12400Grey5D5D5D,}}>
                              {item.address}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <Yellowstar />
                                <Text
                                  style={{
                                    ...StylesGloble.font14500g6D6D6D,
                                    left: 2,
                                  }}>
                                  {item.rating}
                                </Text>
                              </View>

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
                                style={{
                                  ...StylesGloble.font14500g6D6D6D,
                                  marginLeft: 8,
                                }}>
                                {item.review}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View>
                          <View style={{marginTop: 10}}>
                            <Text style={StylesGloble.font16600black}>
                              About Me
                            </Text>
                            <Text
                              style={{
                                ...StylesGloble.font12500Black000000,
                                marginTop: 10,
                              }}>
                              {item.heading}
                            </Text>
                          </View>
                        </View>
                      </Card>
                    </View>
                  )}
                />
              </View>
              <View style={StylesGloble.marginscreen}>
                <View>
                  <Text style={StylesGloble.font20700000000}>
                    Photos And Videos
                  </Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: 20,}}>
                  <Image
                    source={Imagepath.Expertprof}
                    style={{height: 210, width: 150, borderRadius: 10}}
                    resizeMode="cover"
                  />
                  <View style={{marginTop: 0}}>
                    <Image
                      source={Imagepath.ExpertProfiletwo}
                      style={{
                        height: 100,
                        width: 160,
                        borderRadius: 10,
                        marginLeft: 10,
                      }}
                      resizeMode="cover"
                    />
                    <Image
                      source={Imagepath.ExpertProfiletin}
                      style={{
                        height: 100,
                        width: 160,
                        borderRadius: 10,
                        marginLeft: 10,
                        marginTop: 10,
                      }}
                      resizeMode="cover"
                    />
                  </View>
                </View>
                <View style={{marginTop: 15}}>
                  <Image
                    source={Imagepath.Vaccum}
                    style={{height: 140, width: '100%', borderRadius: 10}}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    marginTop: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={Imagepath.Experrofile}
                    style={{height: 140, width: '48%', borderRadius: 10}}
                    resizeMode="cover"
                  />
                  <Image
                    source={Imagepath.Exp}
                    style={{height: 140, width: '48%', borderRadius: 10}}
                    resizeMode="cover"
                  />
                </View>

                {/* 
          <MasonryList
            data={imagedata}
            keyExtractor={item => item.id}
            numColumns={1}
            // horizontal={true}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View
                style={{
                  marginTop: 0,
                  margin: 0,
                  padding: 5,
                  // backgroundColor: '#f9f9f9',
                  // borderRadius: 10,
                  // overflow: 'hidden',
                }}>
                <Image
                  source={item.image}
                  style={{height: 220, width: 150, borderRadius: 10}}
                />
              </View>
            )}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({first: ITEM_CNT})}
            // onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
          /> */}
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default Profile;
