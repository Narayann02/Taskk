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
import Search from '../../assest/svg/Search.svg';

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
    name: 'Chloe',
    time: '2:58 PM',
    heading: 'Hello! Are you available for toni...',
  },
  {
    id: 3,
    image: Imagepath.Phoebe,
    name: 'Phoebe',
    time: '2:41 PM',
    heading: 'Good bye!',
  },
  {
    id: 4,
    image: Imagepath.Jack,
    name: 'Jack',
    time: '2:27 PM',
    heading: 'See you again!',
  },
  {
    id: 5,
    image: Imagepath.Gibson,
    name: 'Gibson',
    time: '2:16 PM',
    heading: 'Okay, Thank you!',
  },
  {
    id: 6,
    image: Imagepath.JohnDoe,
    name: 'John Doe',
    time: '3:22 PM',
    heading: 'Okay, Thank you!',
  },
  {
    id: 7,
    image: Imagepath.Gibson,
    name: 'Gibson',
    time: '2:16 PM',
    heading: 'Okay, Thank you!',
  },
  {
    id: 8,
    image: Imagepath.JohnDoe,
    name: 'John Doe',
    time: '3:22 PM',
    heading: 'Okay, Thank you!',
  },
];

const Chat = ({navigation}) => {
  return (
    <View style={{...StylesGloble.container}}>
      <FlatList
        style={{marginBottom: '3%'}}
        data={[(name = 'bjb')]}
        renderItem={({item}) => (
          <>
            <View
              style={{
                backgroundColor: '#04BEFC',
                width: '100%',
                padding: '3%',
                alignSelf: 'center',
              }}>
              <Header name={'Chats'} />
            </View>
<View style={StylesGloble.marginscreen}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#E7E7E7',
                backgroundColor: 'white',
                height: 55,
                width: '100%',
                alignSelf: 'center',
                bottom: -10,
                borderRadius: 8,
              }}>
              <Search style={{left: 10}} />

              <TextInput
                style={{left: 15, width: '85%'}}
                placeholder="Search here.."
              />
            </View>
            </View>
            <View>
              <FlatList
                data={Appliancesdata}
                style={{marginTop: 35,}}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity
                      style={{padding: 4,paddingLeft:15,paddingRight:15}}
                      onPress={() => navigation.navigate('Kaitlyn', { chat: item })}>
                      <View
                        style={{
                          backgroundColor: '#ffffff',
                          padding: 12,
                          borderWidth: 1,
                          borderColor: '#E7E7E7',
                          borderRadius: 10,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={item.image}
                            style={{height: 45, width: 45, borderRadius: 10}}
                            resizeMode="cover"
                          />
                          <View style={{marginLeft: 10}}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '72%',
                              }}>
                              <Text style={{...StylesGloble.font16600black,fontWeight:'800'}}>
                                {item.name}
                              </Text>

                              <Text
                                style={{
                                  ...StylesGloble.font10500grey,
                                  marginLeft: 0,
                                }}>
                                {item.time}
                              </Text>
                            </View>
                            <Text style={StylesGloble.font14400grey5D5D5D}>
                              {item.heading}
                            </Text>
                          </View>
                        </View>
                        <View>

                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                )}
              />
            </View>
           
          </>
        )}
      />
    
    </View>
  );
};

export default Chat;


// ChatListScreen.js
// ChatListScreen.js
// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

// const chats = [
//   { id: '1', name: 'Kaitlyn', message: 'Have a good one!', time: '3:02 PM', imageUri: 'https://example.com/kaitlyn.jpg' },
//   { id: '2', name: 'Chloe', message: 'Hello! Are you available for tonight?', time: '2:55 PM', imageUri: 'https://example.com/chloe.jpg' },
//   { id: '3', name: 'Phoebe', message: 'Good bye!', time: '2:41 PM', imageUri: 'https://example.com/phoebe.jpg' },
//   // Add more chat objects here
// ];

// const ChatItem = ({ item, navigation }) => (
//   <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Kaitlyn', { chat: item })}>
//     <Image source={{ uri: item.imageUri }} style={styles.avatar} />
//     <View style={styles.chatInfo}>
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.message}>{item.message}</Text>
//     </View>
//     <Text style={styles.time}>{item.time}</Text>
//   </TouchableOpacity>
// );

// const Chat = ({ navigation }) => {
//   return (
//     <FlatList
//       data={chats}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => <ChatItem item={item} navigation={navigation} />}
//       contentContainerStyle={styles.list}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   list: {
//     padding: 10,
//   },
//   chatItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   chatInfo: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   message: {
//     fontSize: 14,
//     color: '#757575',
//   },
//   time: {
//     fontSize: 12,
//     color: '#757575',
//   },
// });

// export default Chat;


