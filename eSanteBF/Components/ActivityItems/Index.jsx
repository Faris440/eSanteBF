import { StyleSheet, Text, View,TouchableOpacity,item, Image } from 'react-native';
import React from 'react';
import stylesA from './styleA';
import StyleSymI from './StyleSymI';

const Index = ({item}) => {
  return (
    <TouchableOpacity style={stylesA.scrollableListItem}>
            <Image style={StyleSymI.itemImg} source={require('../../assets/img1.jpg')} ></Image>
            <Text style={stylesA.mainText}>{item.mainText}</Text>
            <Text style={stylesA.subText}>{item.suBtext}</Text>
          </TouchableOpacity>
  );
};

export default Index;