import React from "react";
import ByCategories from "../screens/ByCategories";
import Header from "../components/Header";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return (
              <Header
                navigation={navigation}
                title={
                  route.name === "Home"
                    ? "Categorias"
                    : route.name === "ByCategories"
                    ? route.params.categorySelected
                    : "Detalle"
                }
              ></Header>
            );
          },
        };
      }}
    >
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="ByCategories" component={ByCategories}></Stack.Screen>
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ShopStack;
