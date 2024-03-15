import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetProductDetailQuery } from "../app/services/shop";
import Header from "../components/Header";
import colors from "../utils/globals/colors";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cart/cartSlice";

const ProductDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;
  const { data: product, isLoading } = useGetProductDetailQuery(productId);
  if (isLoading)
    return (
      <View>
        <Text>Cargando</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: product.thumbnail }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.price}>${product.price}</Text>
        <Pressable style={styles.buyNow}>
          <Text
            style={styles.buyNoeText}
            onPress={() => dispatch(addCartItem(product))}
          >
            Carrito
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
  content: {
    width: "100%",
    position: "relative",
  },
  contentLandscape: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: 15,
  },
  image: {
    width: "30%",
    height: 100,
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25,
  },
  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 30,
  },
  buyNow: {
    backgroundColor: colors.grey,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buyNoeText: {
    color: colors.pink,
  },
});
