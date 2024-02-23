import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import products from "../utils/data/products.json";
import Header from "../components/Header";
import colors from "../utils/globals/colors";

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFinded = products.find((product) => product.id === productId);
    setProduct(productFinded);
  }, [productId]);

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
          <Text style={styles.buyNoeText}>But now</Text>
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
    width: "100%",
    height: 300,
  },
  conainerText: {
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
    color: "white",
  },
});