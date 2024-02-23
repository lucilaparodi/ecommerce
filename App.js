import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";
import CardCategory from "./src/components/CardCategory";
import { useEffect, useState } from "react";
import ByCategories from "./src/screens/ByCategories";
import { useFonts } from "expo-font";
import colors from "./src/utils/globals/colors";
import Header from "./src/components/Header";
import { fontCollection } from "./src/utils/globals/fonts";
import ProductDetail from "./src/screens/ProductDetail";
// import { SafeAreaView } from "react-native-web";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection);

  if (!fontsLoaded) return null;
  return (
    <>
      <StatusBar backgroundColor={colors.grey}></StatusBar>
      <NavigationContainer>
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
          <Stack.Screen
            name="ByCategories"
            component={ByCategories}
          ></Stack.Screen>
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
  },
});
