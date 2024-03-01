import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/globals/colors";
import fonts from "../utils/globals/fonts";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {new Date(order.createAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>${order.total}</Text>
      </View>
      <Ionicons name="search" size={30} color={colors.pink}></Ionicons>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.blue,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center",
    height: 100,
  },
  textContainer: { width: "70%" },
  text: {
    color: colors.white,
    fontFamily: fonts.PoppinsR,
    fontSize: 16,
  },
  text2: {
    color: colors.white,
    fontFamily: fonts.PoppinsL,
    fontSize: 14,
  },
});
