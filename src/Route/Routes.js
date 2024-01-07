import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../Screens/Main/SplashScreen/Splash';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import Onbording from '../Screens/Main/OnbordingScreen/Onbording';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Onbording_Show} from '../redux/Action/action';
const Routes = () => {
  const userlogin = useSelector(state => state.userlogin);
  const isShow = useSelector(state => state.showOnboarding);
  const dispatch = useDispatch();
  console.log('===>data', userlogin);
  const [isloading, setIsLoading] = useState(true);
  const CheckonBoarding = async () => {
    const data = await AsyncStorage.getItem('showOnboarding');
    if (JSON.parse(data)) {
      dispatch(Onbording_Show(false));
    }
  };
  useEffect(() => {
    CheckonBoarding();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isloading) {
    return <Splash />;
  }
  if (isShow) {
    return <Onbording />;
  }
  return (
    <NavigationContainer>
      {userlogin ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
