import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const RenderItem = ({item}) => {
  return (
    <View style={{margin: 10, alignItems: 'center', width: 100}}>
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
    fontWeight: '400',
  },
  view: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#b4d1cd',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  img: {height: 60, width: 60, tintColor: '#000'},
});
