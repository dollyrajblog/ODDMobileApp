import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {Onbording_Show} from '../../../redux/Action/action';
const slides = [
  {
    key: 1,
    title: 'Customise Your Bussiness',
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Stock by Brand',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Stock by Category',
    text: "I'm already out of descriptions\nLorem ipsum bla bla bla",
    backgroundColor: '#22bcb5',
  },
];
const Onbording = () => {
  const dispatch = useDispatch();
  _renderItem = ({item}) => {
    return (
      <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.text}>{item.text}</Text> */}
      </View>
    );
  };
  _onDone = async () => {
    dispatch(Onbording_Show(false));
    await AsyncStorage.setItem('showOnboarding', JSON.stringify(true));
  };
  return (
    <AppIntroSlider
      showPrevButton
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
    />
  );
};

export default Onbording;
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 24,
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
  },
  text: {
    textAlign: 'center',
  },
});
