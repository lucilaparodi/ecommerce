import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useGetProductsByCategoryQuery } from "../app/services/shop";
import Product from "../components/Product";
import Search from "../components/Search";
import colors from "../utils/globals/colors";

const ByCategories = ({ route, navigation }) => {
  const { categorySelected } = route.params;
  const {
    data: products,
    isError,
    isLoading,
    error,
    isSuccess,
  } = useGetProductsByCategoryQuery(categorySelected);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  console.log(products);

  const handlerKeyword = (k) => {
    setKeyword(k);
  };
  useEffect(() => {
    setProductsFiltered(products);
    if (keyword)
      setProductsFiltered(
        products.filter((product) => {
          const productTitleLower = product.title.toLowerCase();
          const keywordLower = keyword.toLowerCase();
          return productTitleLower.includes(keywordLower);
        })
      );
  }, [categorySelected, keyword, products]);

  if (isLoading)
    return (
      <View>
        <Text style={styles.text}>Cargando</Text>
      </View>
    );

  return (
    <>
      {/* // <View style={styles.container}> */}
      <Search handlerKeyword={handlerKeyword}></Search>
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product navigation={navigation} item={item}></Product>
        )}
      ></FlatList>
      {/* </View> */}
    </>
  );
};

export default ByCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 50,
  },
});
