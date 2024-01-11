import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomHeader from '../../../componets/CustomHeader/CustomHeader';
const Mockup = ({navigation}) => {
  return (
    <SafeAreaView>
      <CustomHeader
        navigation={navigation}
        label={'Mock up'}
        showcard={false}
        showwishlist={false}
        showsearch={false}
        showshare={false}
        isback={false}
      />
      <View>
        <Text>Mockup</Text>
      </View>
    </SafeAreaView>
  );
};

export default Mockup;

const styles = StyleSheet.create({});
