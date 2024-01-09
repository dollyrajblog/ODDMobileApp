import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, Fonts } from '../../Custom/customStyle';
const CustomHeader = ({navigation, label}) => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.labeltxt}>{label}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Icon name="heart" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Icon name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  btn: {
    padding: 4,
    marginHorizontal: 4,
  },
  header: {
    backgroundColor: Colors.APP_THEAM,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  labeltxt: {
    paddingLeft: 8,
    fontSize: 18,
    color: '#fff',
    fontFamily:Fonts.ROBOTO_MEDIUM
  },
});
