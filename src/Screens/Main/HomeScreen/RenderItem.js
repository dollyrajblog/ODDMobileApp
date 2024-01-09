import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { Fonts } from '../../../Custom/customStyle';

const RenderItem = ({item}) => {
  return (
    <View style={{margin: 10, alignItems: 'center', width: 60}}>
      <TouchableOpacity style={styles.view}>
        <Image source={item.image} style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.txt} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    paddingVertical: 8,
    color: '#000',
    fontSize: 14,
    fontFamily:Fonts.Poppines_Regular ,
  },
  view: {
    height: 55,
    width: 55,
    borderRadius: 100,
    backgroundColor: '#cfe4bf', //#b4d1cd',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  img: {height: 30, width: 30, tintColor: '#000'},
});
