import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/globals/colors.js";
import fonts from "../utils/globals/fonts.js";

const Header = ({ title = "Ecommerce" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    fontSize: 30,
    color: colors.blue,
    fontFamily: fonts.Protest,
  },
});
