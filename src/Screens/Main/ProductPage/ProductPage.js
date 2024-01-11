import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {ImagePath} from '../../../Custom/ImagePath';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors, Fonts} from '../../../Custom/customStyle';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../../componets/CustomHeader/CustomHeader';
const {height, width} = Dimensions.get('screen');
const ProductPage = ({navigation}) => {
  const [count, setCount] = useState(1);
  const [rating, setRating] = useState(0);
  const [like, setLike] = useState(false);
  const [seemore, setSeeMore] = useState(false);
  const [size, setSize] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        label={'T-Shirt'}
        navigation={navigation}
        isback={true}
        showcard={true}
        showwishlist={true}
        showsearch={false}
        showshare={true}
      />
      <ScrollView
        style={{flex: 1, marginHorizontal: 16}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <AppIntroSlider
            data={[1, 2, 3]}
            showNextButton={false}
            showDoneButton={false}
            renderItem={() => (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={ImagePath.TSHIRT}
                  style={{height: height * 0.3}}
                  resizeMode="contain"
                />
              </View>
            )}
            activeDotStyle={[
              styles.dotStyle,
              {
                backgroundColor: Colors.APP_THEAM,
              },
            ]}
            dotStyle={[styles.dotStyle, {width: 8, backgroundColor: 'grey'}]}
          />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.namestyle}>T-Shirt</Text>
            <Text style={styles.txt}>
              $ 100.00{' '}
              <Text style={{textDecorationLine: 'line-through'}}>
                $ 120.00{' '}
              </Text>
            </Text>
            <Text style={styles.txt}>Quantity</Text>
            <View style={styles.quantity}>
              <TouchableOpacity
                style={{paddingVertical: 8, paddingHorizontal: 16}}
                onPress={() => setCount(count - 1)}
                disabled={count === 1}>
                <Icon
                  name="minus"
                  size={24}
                  color={count === 1 ? 'grey' : '#000'}
                />
              </TouchableOpacity>
              <Text style={styles.txt}>{count}</Text>
              <TouchableOpacity
                style={{paddingVertical: 8, paddingHorizontal: 16}}
                onPress={() => setCount(count + 1)}>
                <Icon name="plus" size={24} color={'#000'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ratingView}>
            {[1, 2, 3, 4, 5].map(item => (
              <TouchableOpacity
                style={{margin: 2}}
                onPress={() =>
                  rating === item ? setRating(item - 1) : setRating(item)
                }>
                <Icon1
                  name={rating >= item ? 'star' : 'star-o'}
                  size={16}
                  color={rating >= item ? '#f5b042' : 'grey'}
                />
              </TouchableOpacity>
            ))}
            <Text style={styles.rating}>{rating} rating</Text>
          </View>
        </View>
        <Text style={styles.txt}>Select Size</Text>
        <View style={{flexDirection: 'row'}}>
          {['S', 'M', 'L', 'XL', 'XXL'].map(item => (
            <TouchableOpacity
              style={{
                paddingVertical: 4,
                marginHorizontal: 2,
                borderWidth: size === item ? 1.5 : 1,
                borderRadius: 16,
                paddingHorizontal: 14,
                borderColor: size === item ? Colors.APP_THEAM : '#00000090',
                backgroundColor: size === item ? '#42c0f520' : '#fff',
              }}
              onPress={() => setSize(item)}>
              <Text
                style={{
                  color: size === item ? Colors.APP_THEAM : '#000',
                  fontSize: 16,
                  fontFamily:
                    size === item ? Fonts.ROBOTO_MEDIUM : Fonts.ROBOTO_REGULAR,
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.txt}>Product Details</Text>
        <Text numberOfLines={seemore ? 3 : null} style={styles.descriptiontxt}>
          Boys Graphic Printed T-Shirt Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <TouchableOpacity onPress={() => setSeeMore(!seemore)}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.ROBOTO_REGULAR,
              color: Colors.APP_THEAM,
            }}>
            {seemore ? 'Read More' : 'Show Less'}
          </Text>
        </TouchableOpacity>
        {/* <View style={styles.butview}>
          <TouchableOpacity style={styles.cardView}>
            <Icon name="shopping-cart" size={24} color="#fff" />
            <Text style={styles.card}>ADD TO CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <Icon1
              name={like ? 'heart' : 'heart-o'}
              size={28}
              color={like ? 'red' : 'grey'}
            />
          </TouchableOpacity>
        </View> */}
      </ScrollView>
      <View style={styles.butview}>
          <TouchableOpacity style={styles.cardView}>
            <Icon name="shopping-cart" size={24} color="#fff" />
            <Text style={styles.card}>ADD TO CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <Icon1
              name={like ? 'heart' : 'heart-o'}
              size={28}
              color={like ? 'red' : 'grey'}
            />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    height: height * 0.3,
    marginTop: 8,
  },
  dotStyle: {
    marginBottom: -12,
    height: 8,
    width: 24,
  },
  container: {
    flex: 1,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  namestyle: {
    fontSize: 24,
    color: '#000',
    fontFamily: Fonts.Poppines_Medium,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#00000080',
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 12,
  },
  txt: {
    fontSize: 18,
    color: '#000',
    fontFamily: Fonts.ROBOTO_MEDIUM,
    marginVertical: 4,
  },
  quantity: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderWidth: 1,
    padding: 2,
    borderRadius: 20,
    borderColor: 'lightgrey',
    alignItems: 'center',
    marginBottom: 4,
  },
  descriptiontxt: {
    fontSize: 14,
    color: '#000',
    fontFamily: Fonts.Poppines_Regular,
    textAlign: 'justify',
  },
  card: {
    fontSize: 18,
    color: '#fff',
    fontFamily: Fonts.Poppines_Medium,
    paddingLeft: 8,
  },
  cardView: {
    backgroundColor: Colors.APP_THEAM,
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  butview: {
    alignItems: 'center',
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
