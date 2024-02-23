import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Shadow from "./wrappers/Shadow";
import colors from "../utils/globals/colors";
import fonts from "../utils/globals/fonts";

const CardCategory = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ByCategories", { categorySelected: item })
      }
    >
      <Shadow style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </Shadow>
    </Pressable>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: colors.blue,
    margin: 8,
    padding: 20,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: colors.grey,
    fontFamily: fonts.PoppinsR,
  },
});
