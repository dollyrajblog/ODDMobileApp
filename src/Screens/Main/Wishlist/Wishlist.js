import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../../componets/CustomHeader/CustomHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImagePath} from '../../../Custom/ImagePath';
import {Fonts} from '../../../Custom/customStyle';
const {height, width} = Dimensions.get('screen');
const Wishlist = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        navigation={navigation}
        label={'My Wishlist'}
        showcard={true}
        showwishlist={false}
        showsearch={false}
        showshare={false}
        isback={true}
      />
      <View style={{flex: 1}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
          style={{paddingTop: 16}}
          numColumns={2}
          renderItem={() => {
            return (
              <View style={styles.main}>
                <View style={styles.container}>
                  <View>
                    <Image
                      source={ImagePath.TSHIRT}
                      style={{width: width * 0.5 - 16, height: height * 0.25}}
                      resizeMode="contain"
                    />
                    <Text numberOfLines={1} style={styles.name}>
                      T-Shirt
                    </Text>
                    <View style={styles.view}>
                      <Icon name={'rupee'} color={'#000'} size={12} />
                      <Text style={styles.txt}> 80.0 </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          fontFamily: Fonts.ROBOTO_LIGHT,
                          color: 'grey',
                          textDecorationLine: 'line-through',
                        }}>
                        100.0
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#ed1805',
                          fontFamily: Fonts.ROBOTO_REGULAR,
                        }}>
                        {' '}
                        (20% OFF)
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.moveView}>
                    <Text style={styles.movetxt}>MOVE TO BAG</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.6} style={styles.deleteView}>
                  <Icon name="trash" size={20} color={'#000'} />
                </TouchableOpacity>
              </View>
            );
          }}
          ListFooterComponent={<View style={{height: 20}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginBottom: 16,
    width: width * 0.5 - 16,
    height: height * 0.35,
  },
  container: {
    justifyContent: 'space-between',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 4,
  },
  name: {
    textTransform: 'capitalize',
    fontSize: 14,
    color: '#000',
    paddingHorizontal: 6,
    paddingTop: 6,
    fontFamily: Fonts.ROBOTO_MEDIUM,
  },
  view: {
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txt: {
    fontSize: 11,
    fontFamily: Fonts.ROBOTO_MEDIUM,
    color: '#000',
  },
  deleteView: {
    marginLeft: -40,
    marginTop: 8,
    borderRadius: 100,
    backgroundColor: '#ffffff90',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 6,
    elevation: 3,
  },
  movetxt: {
    fontFamily: Fonts.Poppines_Medium,
    fontSize: 13,
    color: '#ed1805',
  },
  moveView: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
});
