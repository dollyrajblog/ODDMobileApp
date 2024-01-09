import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {Onbording_Show} from '../../../redux/Action/action';
import { Colors , Fonts} from '../../../Custom/customStyle';
const slides = [
  {
    key: 1,
    title: 'Customise Your Bussiness',
    text: 'Description.\nSay something cool',
    img: require('../../../assets/images/bussiness.png'),
  },
  {
    key: 2,
    title: 'Stock by Brand',
    text: 'Other cool stuff',
    img: require('../../../assets/images/branding.png'),
  },
  {
    key: 3,
    title: 'Stock by Category',
    text: "I'm already out of descriptions\nLorem ipsum bla bla bla",
    img: require('../../../assets/images/custmer.png'),
  },
];
const Onbording = () => {
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <View style={[styles.slide]}>
        <Image
          source={item.img}
          style={{height: 320, width: 320}}
          resizeMode="cover"
        />
        <Text style={styles.title}>{item.title}</Text>
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
      renderItem={renderItem}
      data={slides}
      onDone={_onDone}
      activeDotStyle={{
        backgroundColor: Colors.APP_COLOR,
        height: 8,
        width: 18,
        marginTop: -180,
      }}
      dotStyle={{
        backgroundColor: 'grey',
        height: 8,
        width: 8,
        marginTop: -180,
      }}
      renderPrevButton={() => (
        <Text style={{fontSize: 16, color: '#00000080', fontFamily:Fonts.Poppines_Medium}}>
          Skip
        </Text>
      )}
      renderDoneButton={() => (
        <Text style={{fontSize: 16, color: Colors.APP_COLOR, fontFamily:Fonts.Poppines_Medium}}>
          Done
        </Text>
      )}
      renderNextButton={() => (
        <Text style={{fontSize: 16, color: '#00000090', fontFamily:Fonts.Poppines_Medium}}>
          Next
        </Text>
      )}
    />
  );
};

export default Onbording;
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
    color: Colors.APP_COLOR,
    fontFamily:Fonts.Poppines_SemiBold
  },
  text: {
    textAlign: 'center',
  },
});
