import React from "react";
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import Arrowicon from '../assest/svg/Arrowicon.svg';
import { StylesGloble } from "./GlobleCss";
import { useNavigation } from "@react-navigation/native";



const Header = (props) =>{
    const navigation = useNavigation();
    return(

     
            <View style={{flexDirection:"row",padding:20,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <View style={{ backgroundColor: '#ffffff',height:30,width:30,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Arrowicon />
                </View>
          
            </TouchableOpacity>

            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text style={{...StylesGloble.font20700000000,}}>{props.name}</Text>
            </View>
  
        </View>

    )
}


const styles = StyleSheet.create({
   textstyle:{

   } 
})
export default Header;







