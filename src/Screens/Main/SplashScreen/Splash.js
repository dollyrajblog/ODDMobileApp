import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImagePath} from '../../../Custom/ImagePath';
const Splash = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={ImagePath.APPLOGO} style={{height: 110, width: 180}} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({});
