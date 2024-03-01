import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "./ShopStack";
import Cart from "../screens/Cart";
import OrderStack from "./OrderStack";
import CartStack from "./CartStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../utils/globals/colors";
import TabBarIcon from "../components/TabBarIcon";
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

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
