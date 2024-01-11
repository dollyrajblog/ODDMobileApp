import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Fonts} from '../../../Custom/customStyle';
import CustomHeader from '../../../componets/CustomHeader/CustomHeader';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {ImagePath} from '../../../Custom/ImagePath';
const {height, width} = Dimensions.get('screen');
const GoToCart = ({navigation}) => {
  const [select, setSelect] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <CustomHeader
        navigation={navigation}
        label={'My Cart'}
        showcard={false}
        showwishlist={true}
        showsearch={false}
        showshare={false}
        isback={true}
      />
      <View
        style={{
          height: height * 0.5,
          alignItems: 'center',
          marginTop: height * 0.1,
        }}>
        <Image
          source={require('../../../assets/images/bag.png')}
          style={{marginVertical: 36}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 24,
            fontFamily: Fonts.Poppines_SemiBold,
            color: '#000',
          }}>
          Hey, it feels so light!
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Fonts.Poppines_Medium,
            color: 'grey',
          }}>
          There is nothing in your bag. Let's add some items.
        </Text>
      </View>

      {/* <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{padding: 2}}
              onPress={() => setSelect(!select)}>
              <Icon1
                name={select ? 'check-square' : 'square-o'}
                size={24}
                color={'#000'}
              />
            </TouchableOpacity>
            <Text
              style={{
                paddingHorizontal: 4,
                fontSize: 14,
                color: '#000',
                fontFamily: Fonts.ROBOTO_MEDIUM,
              }}>
              ITEMS SELECTED
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{padding: 4}}>
              <Icon1 name="trash" size={24} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
          data={[1, 2]}
          renderItem={item => (
            <View style={{flexDirection: 'row', marginVertical:8}}>
              <TouchableOpacity
                style={{padding: 2, marginRight:-24, zIndex:2}}
                onPress={() => setSelect(!select)}>
                <Icon1
                  name={select ? 'check-square' : 'square-o'}
                  size={24}
                  color={'#000'}
                />
              </TouchableOpacity>
              <Image
              source={ImagePath.TSHIRT}
              style={{height:height*0.2, width:width*0.35}}
              />
              <View
              style={{marginLeft:12}}
              >
              <Text>T-shirt</Text>
              <Text>boys T-shirt</Text>
              <Text>Size</Text>
              <Text>Qty</Text>
              <Text>₹100</Text>
              </View>
              
            </View>
          )}
        />
      </View> */}
      {/* <View style={styles.bottonView}>
        <TouchableOpacity
          onPress={() => {
            alert('Button clicked!');
          }}>
          <Text>PLACE ORDER</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default GoToCart;

const styles = StyleSheet.create({
  bottonView: {
    bottom: 0,
    height: height * 0.1,
    backgroundColor: Colors.APP_THEAM,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
