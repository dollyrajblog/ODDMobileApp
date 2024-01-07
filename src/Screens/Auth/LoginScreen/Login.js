import {
  Image,
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
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor: '#fff'}}>
          <View
            style={{
              height: height * 0.25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={ImagePath.APPLOGO}
              style={{height: 110, width: 180}}
            />
          </View>
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
                  color={'#000'}
                />
                <Text style={[styles.txt, {marginHorizontal: 4}]}>
                  Remember Me
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={[styles.txt, {color: '#3399fe'}]}>
                Forgot Your Password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => On_valid()}>
            <View
              style={{
                backgroundColor: '#3399fe',
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
              justifyContent: 'center',
              marginVertical: 12,
            }}>
            <Text style={styles.txt}>Don't have a account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={{paddingHorizontal: 4}}>
              <Text style={[styles.txt, {color: '#3399fe'}]}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  txtInput: {
    borderWidth: 1,
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    borderColor: '#777',
    color: '#000',
    fontSize: 16,
    marginVertical: 4,
    borderRadius: 2,
    paddingHorizontal: 8,
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
});
