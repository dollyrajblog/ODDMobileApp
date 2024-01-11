import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../componets/CustomHeader/CustomHeader';
import {ImagePath} from '../../../Custom/ImagePath';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../../../Custom/customStyle';
const {height, width} = Dimensions.get('screen');
const ProductList = ({navigation}) => {
  const [rating, setRating] = useState(0);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        label="Women"
        navigation={navigation}
        isback={true}
        showcard={true}
        showwishlist={true}
        showsearch={false}
        showshare={false}
      />
      <View style={{flex: 1}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={styles.mainslider}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('ProductPage')}>
                <Image
                  source={ImagePath.TSHIRT}
                  style={{
                    height: height * 0.1,
                    width: width * 0.18,
                  }}
                  resizeMode="contain"
                />
                <View style={{marginLeft: 12}}>
                  <Text style={styles.txt}>T-Shirt</Text>
                  <Text
                    style={[styles.txt, {fontFamily: Fonts.Poppines_Regular}]}>
                    Boys T-shirt
                  </Text>
                  <Text style={styles.txt}>$ 100.00</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {[1, 2, 3, 4, 5].map(item => (
                      <View style={{marginRight: 4}}>
                        <Icon1
                          name={rating >= item ? 'star' : 'star-o'}
                          size={18}
                          color={rating >= item ? '#f5b042' : 'grey'}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponent={<View style={{height: 20}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  mainslider: {
    paddingHorizontal: 16,
    marginVertical: 4,
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderBottomColor: 'lightgrey',
  },
  txt: {
    color: '#000',
    fontSize: 16,
    fontFamily: Fonts.Poppines_Medium,
  },
});
