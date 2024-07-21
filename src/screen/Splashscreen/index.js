import React,{useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {StylesGloble} from '../../helper/GlobleCss';
import Imagepath from '../../constant/Imagepath';


const Splashscreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Login');
        }, 3000);
      }, []);
  return (
    <View style={StylesGloble.container}>
      <View>
        <View
     
          style={{height: '100%', width: '100%', position: 'relative',backgroundColor:'#04BEFC'}}>
          <View style={styles.viewstyle}>
            <Image
              source={Imagepath.vehicle}
              style={{height: 95, width:95}}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewstyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Splashscreen;
