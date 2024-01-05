import Home from '../Screens/Main/HomeScreen/Home';
import FindSupplier from '../Screens/Main/FindSupplierScreen/FindSupplier';
import Mockup from '../Screens/Main/MockUpScreen/Mockup';
import {createDrawerNavigator} from '@react-navigation/drawer';
const MainStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="FindSupplier" component={FindSupplier} />
      <Drawer.Screen name="Mockup" component={Mockup} />
    </Drawer.Navigator>
  );
};

export default MainStack;
