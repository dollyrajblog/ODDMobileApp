import Home from '../Screens/Main/HomeScreen/Home';
import FindSupplier from '../Screens/Main/FindSupplierScreen/FindSupplier';
import Mockup from '../Screens/Main/MockUpScreen/Mockup';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Search from '../Screens/Main/Search/Search';
import DrawerStack from './DrawerStack';
const MainStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <DrawerStack {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="FindSupplier"
        component={FindSupplier}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Mockup"
        component={Mockup}
        options={{headerShown: false}}
      />
       <Drawer.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default MainStack;
