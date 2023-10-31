import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from "../screens/AboutUs";
import Information from "../screens/Information";
import News from "../screens/News";
import Offers from "../screens/Offers";
import Toppings from "../screens/Toppings";
import YourOrders from "../screens/YourOrders";
import Menu from "../screens/Menu";

export default function SideBar() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="Toppings" component={Toppings} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="Informations" component={Information} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Your Orders" component={YourOrders} />
    </Drawer.Navigator>
  );
}
