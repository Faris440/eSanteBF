import { View, Text, TouchableOpacity,Image,item } from 'react-native';
import React from 'react';
import StyleSymI from './StyleSymI';

const Symptomes = ({item}) => {
  return (
    <TouchableOpacity >
      <View style={StyleSymI.item}> 
      <Image style={StyleSymI.itemImg} source={require('./../../assets/tete.jpg')}/>
        <Text>{item.libelle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Symptomes;