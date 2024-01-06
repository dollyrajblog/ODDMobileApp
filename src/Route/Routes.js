import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Main/SplashScreen/Splash';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
const Stack = createStackNavigator();
// ====
const Routes = () => {
  const userlogin = useSelector(state=>state.userlogin);
  console.log("=====>data", userlogin)
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isloading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {userlogin ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
