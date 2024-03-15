import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import OrderStack from "./OrderStack";
import CartStack from "./CartStack";
import TabBarIcon from "../components/TabBarIcon";
import ProfileStack from "./ProfileStack";
import colors from "../utils/globals/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon nameIcon="home" title="Home" focused={focused} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon nameIcon="cart" title="Carrito" focused={focused} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon nameIcon="list" title="Ordenes" focused={focused} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon nameIcon="person" title="Perfil" focused={focused} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    height: 80,
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 25,
    borderRadius: 15,
    elevation: 4,
  },
});
