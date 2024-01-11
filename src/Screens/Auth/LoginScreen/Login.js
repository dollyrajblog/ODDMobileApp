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
import {User_Login} from '../../../redux/Action/action';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors, Fonts} from '../../../Custom/customStyle';
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
            style={styles.iconView}>
            <Text style={styles.skip}>Skip</Text>
            <Icon name="angle-dobule-right" color={Colors.APP_COLOR} />
          </TouchableOpacity>
          <Text style={styles.welcome}>Welcome to</Text>
          <View style={{backgroundColor: '#b4d1cd'}}>
            <View
              style={{
                height: height * 0.25,
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderBottomLeftRadius: 90,
              }}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.logoView}>O</Text>
                <Text
                  style={[
                    styles.logoView,
                    {backgroundColor: Colors.APP_COLOR},
                  ]}>
                  D
                </Text>
                <Text style={styles.logoView}>D</Text>
              </View>
              <Text style={styles.appText}>Order Design Dispatch</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#b4d1cd',
              height: height * 0.6,
              padding: 16,
              paddingTop: 60,
              borderTopRightRadius: 90,
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
                <Text style={[styles.txt, {color: '#1b247a'}]}>
                  Forgot Your Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => On_valid()}>
              <View
                style={{
                  backgroundColor: '#1b247a',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 8,
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: Fonts.Poppines_Medium,
                  }}>
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 8,
              }}>
              <View style={styles.line} />
              <Text style={styles.ortxt}>Or</Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={styles.txt}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={{paddingHorizontal: 4}}>
                <Text style={[styles.txt, {color: '#1b247a'}]}>Register</Text>
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
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    color: '#000',
    fontSize: 16,
    marginVertical: 4,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    fontFamily: Fonts.Poppines_Regular,
  },
  txt: {
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: Fonts.Poppines_Medium,
  },
  errortxt: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 4,
    marginVertical: -2,
    fontFamily: Fonts.Poppines_Regular,
  },
  logotxt: {
    color: Colors.APP_COLOR,
    fontSize: 24,
    paddingLeft: 16,
  },
  logoView: {
    backgroundColor: '#625d61',
    color: '#fff',
    fontSize: 18,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    alignSelf: 'flex-start',
    fontFamily: Fonts.Poppines_Medium,
  },
  line: {height: 1.5, backgroundColor: 'grey', flex: 1},
  ortxt: {
    paddingHorizontal: 8,
    color: '#000',
    fontSize: 16,
    fontFamily: Fonts.Poppines_Regular,
  },
  iconView: {
    alignSelf: 'flex-end',
    padding: 4,
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skip: {
    color: Colors.APP_COLOR,
    fontSize: 16,
    paddingRight: 4,
    fontFamily: Fonts.Poppines_Medium,
  },
  welcome: {
    paddingHorizontal: 16,
    fontSize: 18,
    color: Colors.APP_COLOR,
    fontFamily: Fonts.Poppines_SemiBold,
  },
  appText: {
    marginTop: 16,
    color: Colors.APP_COLOR,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: Fonts.Poppines_SemiBold,
  },
});
