import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/globals/colors.js";
import fonts from "../utils/globals/fonts.js";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title = "Ecommerce", navigation }) => {
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color={colors.pink}></Ionicons>
        </Pressable>
      )}
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
    position: "relative",
  },
  text: {
    fontSize: 30,
    color: colors.blue,
    fontFamily: fonts.Protest,
  },
  goBack: {
    position: "absolute",
    left: 10,
    top: 10,
  },
});
