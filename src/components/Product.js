import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../utils/globals/colors.js";
import fonts from "../utils/globals/fonts.js";

const Product = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.thumbnail }}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 2,
    width: "80%",
    marginHorizontal: "10%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 5,
  },
  text: {
    width: "60%",
    fontSize: 16,
    fontFamily: fonts.PoppinsR,
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  title: { fontFamily: fonts.PoppinsB, fontSize: 20 },
  description: { fontFamily: fonts.PoppinsR, fontSize: 16, marginVertical: 5 },
  price: { fontFamily: fonts.PoppinsL, fontSize: 20 },
});
