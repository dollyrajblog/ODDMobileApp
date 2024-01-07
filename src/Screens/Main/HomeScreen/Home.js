import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {data, data2} from '../../../LocalData/Data';
import RenderItem from './RenderItem';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CustomHeader from '../../../componets/CustomHeader/CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');
const Home = ({navigation}) => {
  const sliderRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = sliderRef.current?.state.activeIndex || 0;
      const nextIndex = (currentIndex + 1) % data2.length;
      sliderRef.current?.goToSlide(nextIndex);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader navigation={navigation} label={'Home'} />
      <View style={{height: 160}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <RenderItem item={item} />}
        />
      </View>
      <View style={{height: height * 0.35}}>
        <LinearGradient
          colors={['#1b247a','#02796e', ]}
          style={{height: height * 0.35}}
          start={{x: 0, y: 0.5}} end={{x: 0.5, y: 1}} 
          >
          <AppIntroSlider
            ref={sliderRef}
            data={data2}
            showNextButton={false}
            showDoneButton={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: item.background,
                    flex: 1,
                    padding: 24,
                    borderRadius: 4,
                    margin: 12,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '400', color: 'grey'}}>
                    {item.title}
                  </Text>
                  <Text
                    style={{fontSize: 24, fontWeight: '600', color: '#000'}}>
                    {item.txt}
                  </Text>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: 'rgba(169, 170, 173, 0.7)',
                      padding: 4,
                      alignSelf: 'flex-start',
                    }}>
                    <Text style={{paddingRight: 6, color: '#fff'}}>
                      Shop Now
                    </Text>
                    <Icon name="arrow-right-long" size={12} color="#fff" />
                  </TouchableOpacity>
                </View>
              );
            }}
            dotStyle={{
              backgroundColor: 'grey',
              width: 8,
              height: 8,
              bottom: -50,
            }}
            activeDotStyle={{
              backgroundColor: '#02796e',
              bottom: -50,
              width: 16,
              height: 8,
            }}
          />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
