import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {
  data,
  data2,
  freelance1,
  freelance2,
  Events,
} from '../../../LocalData/Data';
import RenderItem from './RenderItem';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CustomHeader from '../../../componets/CustomHeader/CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts} from '../../../Custom/customStyle';
import {ImagePath} from '../../../Custom/ImagePath';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Find Suppiler */}
        <View style={{height: 125}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <RenderItem item={item} />}
          />
        </View>
        {/* Frist scrollview */}
        <View style={{height: height * 0.25, marginBottom: 12}}>
          <LinearGradient
            colors={[Colors.APP_THEAM, Colors.APP_COLOR]}
            style={{height: height * 0.25}}
            start={{x: 0, y: 0.5}}
            end={{x: 0.5, y: 1}}>
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
                      margin: 8,
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
                        backgroundColor: 'rgba(169, 170, 173, 0.4)',
                        paddingVertical: 4,
                        paddingHorizontal: 8,
                        alignSelf: 'flex-start',
                        marginTop: 12,
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
                backgroundColor: Colors.APP_THEAM,
                bottom: -50,
                width: 16,
                height: 8,
              }}
            />
          </LinearGradient>
        </View>
        {/* Products */}
        <View
          style={{
            backgroundColor: '#c3efff',
            marginVertical: 16,
            paddingBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 12,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 18,
                fontFamily: Fonts.ROBOTO_BOLD,
              }}>
              Products
            </Text>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 100,
                backgroundColor: Colors.BUTTON_COLOR,
                alignSelf: 'flex-end',
              }}>
              <Icon name="angles-right" size={16} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.toString()}
            renderItem={() => (
              <View
                style={{
                  margin: 8,
                  height: height * 0.2,
                  width: width * 0.29,
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  paddingHorizontal: 8,
                  borderRadius: 8,
                  elevation: 5,
                  borderWidth: 1,
                  borderColor: Colors.APP_COLOR,
                }}>
                <TouchableOpacity>
                  <Image
                    source={ImagePath.TSHIRT}
                    style={{height: height * 0.14, marginVertical: 8}}
                    resizeMode="contain"
                  />
                  <Text style={{textAlign: 'center'}}>T-Shirt</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* Categories */}
        <View
          style={{
            backgroundColor: Colors.APP_COLOR, //'#cfb3f2',
            marginVertical: 16,
            paddingBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 12,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: Fonts.ROBOTO_BOLD,
              }}>
              Categories
            </Text>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 100,
                backgroundColor: Colors.BUTTON_COLOR,
                alignSelf: 'flex-end',
              }}>
              <Icon name="angles-right" size={16} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={[1, 2, 3, 4]}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.toString()}
            renderItem={() => (
              <View
                style={{
                  margin: 8,
                  height: height * 0.25,
                  width: width * 0.45,
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  paddingHorizontal: 8,
                  borderRadius: 8,
                  elevation: 5,
                  borderWidth: 1,
                  borderColor: '#c3efff',
                }}>
                <TouchableOpacity>
                  <Image
                    source={ImagePath.TSHIRT}
                    style={{height: height * 0.18, marginVertical: 8}}
                    resizeMode="contain"
                  />
                  <Text style={{textAlign: 'center'}}>WOMEN</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* first freelance services  */}
        <View style={{backgroundColor: '#fff'}}>
          <FlatList
            data={freelance1}
            renderItem={({item}) => (
              <View
                style={{
                  marginVertical: 8,
                  marginHorizontal: 12,
                  backgroundColor: '#fff',
                  height: height * 0.25,
                  alignItems: 'center',
                  borderWidth: 4,
                  borderColor: Colors.APP_THEAM,
                  paddingVertical: 5,
                  borderRadius: 4,
                }}>
                <TouchableOpacity style={{backgroundColor: '#fff'}}>
                  <Image
                    style={{height: height * 0.18, width: width * 0.4}}
                    source={item.image}
                    resizeMode="cover"
                  />
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 18,
                      fontFamily: Fonts.ROBOTO_MEDIUM,
                      marginTop: -4,
                      textAlign: 'center',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* Facoty stock */}
        <View
          style={{
            marginTop: 24,
            backgroundColor: '#fff',
            paddingVertical: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 12,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 18,
                fontFamily: Fonts.ROBOTO_BOLD,
              }}>
              Factory Stocks
            </Text>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 100,
                backgroundColor: Colors.BUTTON_COLOR,
                alignSelf: 'flex-end',
              }}>
              <Icon name="angles-right" size={16} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
              <View
                style={{
                  margin: 8,
                  height: height * 0.28,
                  width: width * 0.45,
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  borderRadius: 4,
                }}>
                <Image
                  source={ImagePath.TSHIRT}
                  style={{height: height * 0.2, marginVertical: 8}}
                  resizeMode="contain"
                />
                <Text>T-Shirt</Text>
              </View>
            )}
          />
        </View>
        {/*  second freelance services  */}
        <View style={{backgroundColor: '#fff'}}>
          <FlatList
            data={freelance2}
            renderItem={({item}) => (
              <View
                style={{
                  marginVertical: 8,
                  marginHorizontal: 12,
                  backgroundColor: '#fff',
                  height: height * 0.15,
                  alignItems: 'center',
                  borderWidth: 4,
                  borderColor: Colors.APP_THEAM,
                  paddingVertical: 5,
                  borderRadius: 4,
                }}>
                <TouchableOpacity style={{backgroundColor: '#fff'}}>
                  <Image
                    style={{height: height * 0.08, alignSelf: 'center'}}
                    source={item.image}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 18,
                      fontFamily: Fonts.ROBOTO_MEDIUM,
                      textAlign: 'center',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* Events */}
        <View style={{marginBottom: 20, height: height * 0.5}}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: Fonts.ROBOTO_BOLD,
              marginLeft: 16,
              marginBottom: -6,
            }}>
            Events
          </Text>
          <AppIntroSlider
            data={Events}
            showNextButton={false}
            showDoneButton={false}
            dotStyle={{}}
            activeDotStyle={{}}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    margin: 12,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: width * 1 - 40,
                      height: height * 0.25,
                      alignSelf: 'center',
                      marginTop: 8,
                    }}
                  />
                  <View style={{margin: 8}}>
                    <Text>{`${item.date}, ${item.comment}`}</Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: '#000',
                        fontFamily: Fonts.Poppines_Medium,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'justify',
                        fontSize: 16,
                        color: '#000',
                        fontFamily: Fonts.Poppines_Regular,
                      }}>
                      {item.content}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
