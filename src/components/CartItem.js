import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/globals/colors";
import fonts from "../utils/globals/fonts";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text1}>{item.brand}</Text>
        <Text style={styles.text1}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text2}>${item.price}</Text>
      </View>
      <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
        <Ionicons name="trash" size={30} color={colors.softPink} />
      </Pressable>
    </View>
  );
};

export default CartItem;

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
  text1: {
    color: colors.white,
    fontFamily: fonts.PoppinsL,
    fontSize: 14,
  },
  text2: {
    color: colors.softPink,
    fontFamily: fonts.PoppinsR,
    fontSize: 14,
  },
});
