import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {User_Login} from '../redux/Action/action';
import {Colors, Fonts} from '../Custom/customStyle';
const {height, width} = Dimensions.get('screen');
const drawerItems = [
  {screenName: 'Home', label: 'Home', iconName: 'home'},
  {screenName: 'FindSupplier', label: 'Find Supplier', iconName: 'search'},
  {screenName: 'Mockup', label: 'Mock Up', iconName: 'list-alt'},
];
const DrawerStack = props => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => dispatch(User_Login(false))}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.topView}>
            <Icon name="user" size={24} color={Colors.APP_THEAM} />
          </View>
          <Text style={styles.txt}>{`Click here by \nLOGIN / SIGN UP`}</Text>
          <Icon name="chevron-right" color="#fff" size={16} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, margin: 8}}>
        {drawerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.drawerItem,
              {
                backgroundColor:
                  props?.state?.index == index ? Colors.APP_THEAM : null,
              },
            ]}
            onPress={() => props.navigation.navigate(item.screenName)}>
            <Icon
              name={item.iconName}
              size={20}
              color={props?.state?.index == index ? '#fff' : '#000'}
            />
            <Text
              style={{
                color: props?.state?.index == index ? '#fff' : '#000',
                fontSize: 16,
                paddingLeft: 8,
                fontFamily: Fonts.ROBOTO_MEDIUM,
              }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({
  drawerItem: {
    padding: 8,
    backgroundColor: 'red',
    marginVertical: 4,
    flexDirection: 'row',
    borderRadius: 4,
  },
  topView: {
    backgroundColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: height * 0.15,
    backgroundColor: Colors.APP_THEAM,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  txt: {
    marginLeft: -40,
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.Poppines_Medium,
  },
});
