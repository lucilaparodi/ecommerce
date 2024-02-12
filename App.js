import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import CardCategory from "./src/components/CardCategory";
import { useEffect, useState } from "react";
import ByCategories from "./src/screens/ByCategories";
import { useFonts } from "expo-font";
import colors from "./src/utils/globals/colors";
import { fontCollection } from "./src/utils/globals/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection);
  const [categorySelected, setCategorySelected] = useState("");
  const selectedCategoryState = (category) => {
    setCategorySelected(category);
  };

  if (!fontsLoaded) return null;
  return (
    <>
      {categorySelected ? (
        <ByCategories categorySelected={categorySelected} />
      ) : (
        <Home selectedCategoryState={selectedCategoryState} />
      )}
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
