import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import products from "../utils/data/products.json";
import Product from "../components/Product";
import Header from "../components/Header";
import Search from "../components/Search";
import colors from "../utils/globals/colors";

const ByCategories = ({ categorySelected }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handlerKeyword = (k) => {
    setKeyword(k);
  };
  useEffect(() => {
    if (categorySelected)
      setProductsFiltered(
        products.filter((product) => product.category === categorySelected)
      );
    if (keyword)
      setProductsFiltered(
        productsFiltered.filter((product) => {
          const productTitleLower = product.title.toLowerCase();
          const keywordLower = keyword.toLowerCase();
          return productTitleLower.includes(keywordLower);
        })
      );
  }, [categorySelected, keyword]);

  return (
    <View style={styles.container}>
      <Header title={categorySelected || "Productos"}></Header>
      <Search handlerKeyword={handlerKeyword}></Search>
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product item={item}></Product>}
      ></FlatList>
    </View>
  );
};

export default ByCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
});
