import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/globals/colors";

const TabBarIcon = ({ title, nameIcon, focused }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={nameIcon}
        size={30}
        color={focused ? colors.pink : colors.softPink}
      ></Ionicons>

      <Text style={[styles.text, !focused && styles.textFocused]}>{title}</Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: colors.pink,
    textAlign: "center",
    fontSize: 15,
  },
  textFocused: {
    color: colors.softPink,
    textAlign: "center",
    fontSize: 15,
  },
});
