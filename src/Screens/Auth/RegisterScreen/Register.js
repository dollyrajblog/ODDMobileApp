import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {User_Login} from '../../../redux/Action/action';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors, Fonts} from '../../../Custom/customStyle';
const {height, width} = Dimensions.get('screen');
const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [erroremail, setErrorEmail] = useState('');
  const [errorname, setErrorName] = useState('');
  const [errorpassword, setErrorPassword] = useState('');
  const [errorconfirmpassword, setErrorConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const Onvalidation = () => {
    if (email === '') {
      setErrorEmail('Please enter your email address or phone no!');
    } else if (name === '') {
      setErrorName('Please enter your name!');
    } else if (password === '') {
      setErrorPassword('Please enter a password!');
    } else if (confirmpassword === '') {
      setErrorConfirmPassword('Please enter a confirm password!');
    } else {
      dispatch(User_Login(true));
    }
  };
  const validEmail = txt => {
    if (txt.length < 2) {
      setErrorEmail('Enter valid email or phone no');
    } else {
      setErrorEmail('');
    }
  };
  const validName = txt => {
    if (txt.length < 2) {
      setErrorName('Enter valid name!');
    } else {
      setErrorName('');
    }
  };
  const validPassword = txt => {
    if (txt.length < 8) {
      setErrorPassword('Please enter password length should be 8');
    } else {
      setErrorPassword('');
    }
  };
  const validConfirmPassword = txt => {
    if (txt !== password) {
      setErrorConfirmPassword('Enter confirm password');
    } else {
      setErrorConfirmPassword('');
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
          <View style={{backgroundColor: '#b4d1cd'}}>
            <Text style={styles.welcome}>Create Account</Text>
            <View
              style={{
                height: height * 0.23,
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
              height: height * 0.62,
              padding: 16,
              paddingTop: 60,
              borderTopRightRadius: 90,
            }}>
            <View style={{paddingVertical: 4}}>
              <Text style={styles.txt}>Phone no or email address *</Text>
              <TextInput
                style={styles.txtInput}
                onChangeText={txt => {
                  setEmail(txt);
                  validEmail(txt);
                }}
              />
              {erroremail !== '' && (
                <Text style={styles.errortxt}>{erroremail}</Text>
              )}
            </View>
            <View style={{paddingVertical: 4}}>
              <Text style={styles.txt}>Username*</Text>
              <TextInput
                style={styles.txtInput}
                onChangeText={txt => {
                  setName(txt);
                  validName(txt);
                }}
              />
              {errorname !== '' && (
                <Text style={styles.errortxt}>{errorname}</Text>
              )}
            </View>
            <View style={{paddingVertical: 4}}>
              <Text style={styles.txt}>Password *</Text>
              <TextInput
                style={styles.txtInput}
                onChangeText={txt => {
                  setPassword(txt);
                  validPassword(txt);
                }}
              />
              {errorpassword !== '' && (
                <Text style={styles.errortxt}>{errorpassword}</Text>
              )}
            </View>
            <View style={{paddingVertical: 4}}>
              <Text style={styles.txt}>Confirm Password *</Text>
              <TextInput
                style={styles.txtInput}
                onChangeText={txt => {
                  setConfirmPassword(txt);
                  validConfirmPassword(txt);
                }}
              />
              {errorconfirmpassword !== '' && (
                <Text style={styles.errortxt}>{errorconfirmpassword}</Text>
              )}
            </View>
            <TouchableOpacity onPress={() => Onvalidation()}>
              <View
                style={{
                  backgroundColor: '#1b247a',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 8,
                  borderRadius: 4,
                  marginTop: 12,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: Fonts.Poppines_Medium,
                  }}>
                  Sign Up
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
              <Text style={styles.txt}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{paddingHorizontal: 4}}>
                <Text style={[styles.txt, {color: '#1b247a'}]}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  welcome: {
    color: Colors.BUTTON_COLOR,
    backgroundColor: '#fff',
    fontSize: 24,
    fontFamily: Fonts.Poppines_SemiBold,
    paddingTop: 16,
    paddingHorizontal: 16,
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
  appText: {
    marginTop: 16,
    color: Colors.APP_COLOR,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: Fonts.Poppines_SemiBold,
  },
  txt: {
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: Fonts.Poppines_Medium,
  },
  line: {height: 1.5, backgroundColor: 'grey', flex: 1},
  ortxt: {
    paddingHorizontal: 8,
    color: '#000',
    fontSize: 16,
    fontFamily: Fonts.Poppines_Regular,
  },
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
  errortxt: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 4,
    marginVertical: -2,
    fontFamily: Fonts.Poppines_Regular,
  },
});
