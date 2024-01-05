import Login from '../Screens/Auth/LoginScreen/Login';
import Register from '../Screens/Auth/RegisterScreen/Register';
import Forgot from '../Screens/Auth/ForgotScreen/Forgot';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
