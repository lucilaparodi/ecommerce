import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CardCategory from "./CardCategory";
import colors from "../utils/globals/colors";
import { useGetCategoriesQuery } from "../app/services/shop";

const Categories = ({ navigation }) => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  const renderCardCategory = ({ item }) => (
    <CardCategory
      navigation={navigation}
      style={styles.card}
      item={item}
    ></CardCategory>
  );

  if (isLoading)
    return (
      <View style={styles.cont2}>
        <Text style={styles.text}>Cargando</Text>
      </View>
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
  text: {
    color: "black",
    fontSize: 50,
  },
  cont2: {
    flex: 1,
  },
});
