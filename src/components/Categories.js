import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import categories from "../utils/data/categories.json";
import CardCategory from "./CardCategory";
import colors from "../utils/globals/colors";

const Categories = ({ selectedCategoryState }) => {
  const renderCardCategory = ({ item }) => (
    <CardCategory
      style={styles.card}
      selectedCategoryState={selectedCategoryState}
      item={item}
    ></CardCategory>
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={categories}
      keyExtractor={(item) => item}
      renderItem={renderCardCategory}
      numColumns={2}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
  },
});
