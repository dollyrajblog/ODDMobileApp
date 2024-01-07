import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {ImagePath} from '../../../Custom/ImagePath';
import {User_Login} from '../../../redux/Action/action';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height, width} = Dimensions.get('screen');
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroremail, setErrorEmail] = useState('');
  const [errorpassword, setErrorPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();
  const On_valid = () => {
    if (email === '' && password === '') {
      setErrorEmail('Please enter Email Id');
      setErrorPassword('Please enter Password');
    } else if (email === '') {
      setErrorEmail('Please enter Email Id');
    } else if (password === '') {
      setErrorPassword('Please enter Password');
    } else {
      console.log(email, password);
      dispatch(User_Login(true));
    }
  };
  const validEmail = () => {
    if (email !== '') {
      setErrorEmail('');
    }
  };
  const validPassword = () => {
    if (password !== '') {
      setErrorPassword('');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView
        style={{flex: 1, backgroundColor: '#fff'}}
        showsVerticalScrollIndicator={false}
        enableAutomaticScroll={false}
        extraScrollHeight={0}
        keyboardShouldPersistTaps={'handled'}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <TouchableOpacity
            onPress={() => dispatch(User_Login(true))}
            style={{
              alignSelf: 'flex-end',
              padding: 4,
              margin: 2,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#02796e', //'#7fc0b7',
                fontSize: 16,
                fontWeight: '600',
                paddingRight: 4,
              }}>
              Skip
            </Text>
            <Icon name="angle-dobule-right" color={'#02796e'} />
          </TouchableOpacity>
          <Text
            style={{
              paddingHorizontal: 16,
              fontSize: 18,
              fontWeight: '600',
              color: '#02796e',
            }}>
            Welcome to
          </Text>
          <View style={{backgroundColor: '#b4d1cd'}}>
            <View
              style={{
                height: height * 0.25,
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderBottomLeftRadius: 90,
                // paddingLeft: 48,
              }}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.logoView}>O</Text>
                <Text style={[styles.logoView, {backgroundColor: '#02796e'}]}>
                  D
                </Text>
                <Text style={styles.logoView}>D</Text>
              </View>
              <Text
                style={{
                  marginTop: 16,
                  color: '#02796e',
                  fontSize: 28,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                Order Design Dispatch
              </Text>
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.logoView}>O</Text>
                <Text style={styles.logotxt}>Order</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.logoView, {backgroundColor:  "#02796e"}]}>
                  D
                </Text>
                <Text style={styles.logotxt}>Design</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.logoView}>D</Text>
                <Text style={styles.logotxt}>Dispatch</Text>
              </View> */}
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#b4d1cd',
              height: height * 0.6,
              padding: 16,
              paddingTop: 60,
              borderTopRightRadius: 90,
              // borderTopLeftRadius:18,
            }}>
            <View style={{paddingVertical: 4}}>
              <Text style={styles.txt}>Username or email address *</Text>
              <TextInput
                style={styles.txtInput}
                onChangeText={txt => {
                  setEmail(txt);
                  validEmail();
                }}
              />
              {erroremail !== '' && (
                <Text style={styles.errortxt}>{erroremail}</Text>
              )}
            </View>
            <View style={{paddingVertical: 4}}>
              <Text style={styles.txt}>Password *</Text>
              <TextInput
                style={styles.txtInput}
                onChangeText={txt => {
                  setPassword(txt);
                  validPassword();
                }}
              />
              {errorpassword !== '' && (
                <Text style={styles.errortxt}>{errorpassword}</Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
                marginBottom: 36,
              }}>
              <TouchableOpacity onPress={() => setRemember(!remember)}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    size={18}
                    name={remember ? 'checkbox-active' : 'checkbox-passive'}
                    color={remember ? '#1b247a' : 'grey'}
                  />
                  <Text style={[styles.txt, {marginHorizontal: 4}]}>
                    Remember Me
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                <Text
                  style={[styles.txt, {color: '#1b247a', fontWeight: '600'}]}>
                  Forgot Your Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => On_valid()}>
              <View
                style={{
                  backgroundColor: '#1b247a', //"#050e61",//'#3399fe',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 8,
                  borderRadius: 4,
                }}>
                <Text style={{color: '#fff', fontSize: 16}}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 8,
              }}>
              <View style={{height: 1.5, backgroundColor: 'grey', flex: 1}} />
              <Text
                style={{
                  paddingHorizontal: 8,
                  color: '#000',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Or
              </Text>
              <View style={{height: 1.5, backgroundColor: 'grey', flex: 1}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={styles.txt}>Don't have a account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={{paddingHorizontal: 4}}>
                <Text
                  style={[styles.txt, {color: '#1b247a', fontWeight: '600'}]}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  txtInput: {
    // borderWidth: 1,
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    // borderColor: '#777',
    color: '#000',
    fontSize: 16,
    marginVertical: 4,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  txt: {
    fontSize: 16,
    color: '#000',
  },
  errortxt: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 4,
    marginVertical: -2,
  },
  logotxt: {
    color: '#02796e', //'#7fc0b7',
    fontSize: 24,
    fontWeight: '600',
    paddingLeft: 16,
  },
  logoView: {
    backgroundColor: '#625d61',
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    alignSelf: 'flex-start',
  },
});
