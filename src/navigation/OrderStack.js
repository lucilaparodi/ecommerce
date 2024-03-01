import React from "react";
import Orders from "../screens/Orders";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return <Header title="Ordenes" navigation={navigation}></Header>;
          },
        };
      }}
    >
      <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default OrderStack;
