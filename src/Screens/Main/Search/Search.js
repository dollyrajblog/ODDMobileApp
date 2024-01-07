import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const Search = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.topView}>
        <TouchableOpacity
          style={{padding: 4}}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color={'#fff'} />
        </TouchableOpacity>
        <View style={{flex: 1, marginHorizontal: 6}}>
          <TextInput
            placeholder="Search for Products, Brand and more"
            style={styles.txtinput}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  topView: {
    backgroundColor:  "#02796e",//'#7fc0b7',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  txtinput: {
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 16,
    color: '#000',
  },
});
