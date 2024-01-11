import Home from '../Screens/Main/HomeScreen/Home';
import FindSupplier from '../Screens/Main/FindSupplierScreen/FindSupplier';
import Mockup from '../Screens/Main/MockUpScreen/Mockup';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Search from '../Screens/Main/Search/Search';
import DrawerStack from './DrawerStack';
import ProductPage from '../Screens/Main/ProductPage/ProductPage';
import ProductList from '../Screens/Main/ProductList/ProductList';
import Wishlist from '../Screens/Main/Wishlist/Wishlist';
import GoToCart from '../Screens/Main/GoToCart/GoToCart';
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
      <Drawer.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ProductPage"
        component={ProductPage}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{headerShown: false}}
      />
       <Drawer.Screen
        name="GoToCart"
        component={GoToCart}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default MainStack;
