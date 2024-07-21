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
import {Card} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Appliancesdata = [
  {
    id: 1,
    image: Imagepath.Exp,
    bookingId: 'Booking Id : #4366679',
    status: 'On Going',
    price: '$1800',
    datetime: '13th july, 2024 | 11:00am',
    paymentStatus: 'Not Paid',
    service: 'Geyse, Microwave',
    category: 'Appliance',
    expert: 'Amit Mishra',
    paymentStatus: 'Not Paid',
  },
  {
    id: 2,
    image: Imagepath.Bookingmen,
    bookingId: 'Booking Id : #4366679',
    status: 'Completed',
    price: '$1800',
    datetime: '13th july, 2024 | 11:00am',
    paymentStatus: 'Paid Cash',
  },
  {
    id: 3,
    image: Imagepath.Booknull,
    bookingId: 'Booking Id : #4366679',
    status: 'Completed',
    price: '$1800',
    datetime: '13th july, 2024 | 11:00am',
    paymentStatus: 'Paid Cash',
  },
];

const Booking = ({navigation}) => {
  return (
    <View style={{...StylesGloble.container}}>
      <View style={{marginBottom: '20%', paddingBottom: '36%'}}>
        <View
          style={{
            backgroundColor: '#04BEFC',
            width: '100%',
            padding: '3%',
            alignSelf: 'center',
          }}>
          <Header name={'Bookings'} />
        </View>
        <View>
          <FlatList
            data={Appliancesdata}
            style={{marginTop: 15, marginBottom: 0}}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginLeft: 20, marginRight: 20}}>
                <Card
                  style={{
                    height: 'auto',
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    borderColor:item.status === 'On Going' ? '#04BEFC' : '#E2F0F5',
                    borderWidth:1,
                    padding: 14,
                    marginVertical: 10,
                    width: '100%',
                    marginTop: 10,
                    borderRadius: 8,
                  }}>
                  <View style={{}}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={item.image}
                        style={{height: 80, width: 80, borderRadius: 5}}
                        resizeMode="cover"
                      />
                      <View style={{marginLeft: 10}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={StylesGloble.font14500g6D6D6D}>
                            {item.bookingId}
                          </Text>
                          <View style={{}}>
                            <Text
                              style={[
                                styles.paymentStatus,
                                item.status === 'Completed'
                                  ? styles.completed
                                  : styles.ongoing,
                              ]}>
                              {item.status}
                            </Text>
                          </View>
                        </View>
                        <Text
                          style={{...StylesGloble.font16600black, bottom: 2}}>
                          {item.price}
                        </Text>
                        <Text style={{...StylesGloble.font12400Grey5D5D5D}}>
                          {item.datetime}
                        </Text>
                      </View>
                    </View>
                    <View></View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 15,
                      }}>
                      <Text style={StylesGloble.fon14500242A37}>Services</Text>
                      <Text style={StylesGloble.fon14500242A37}>
                        Geyse,Microwave
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <Text style={StylesGloble.fon14500242A37}>Category</Text>
                      <Text style={StylesGloble.fon14500242A37}>Appliance</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <Text style={StylesGloble.fon14500242A37}>Expert</Text>
                      <Text style={StylesGloble.fon14500242A37}>
                        Amit Mishra
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <Text style={StylesGloble.fon14500242A37}>
                        Payment Status
                      </Text>
                      <Text
                        style={[
                          styles.paymentStatus,
                          item.paymentStatus === 'Not Paid'
                            ? styles.notPaid
                            : styles.paidCash,
                        ]}>
                        {item.paymentStatus}
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  paymentStatus: {
    fontSize: 10,
    color: '#000000',
  },

  completed: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  ongoing: {
    backgroundColor: '#FF980030',
    color: '#FF9800',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  notPaid: {
    color: '#FF9800',
    fontSize: 14,
    fontWeight: '500',
  },
  paidCash: {
    color: 'green',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Booking;
