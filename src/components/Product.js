import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import colors from "../utils/globals/colors.js";
import fonts from "../utils/globals/fonts.js";

const Product = ({ item, navigation }) => {
  const dimensios = useWindowDimensions();
  return (
    <>
      <Pressable
        onPress={() =>
          navigation.navigate("ProductDetail", { productId: item.id })
        }
        style={styles.container}
      >
        <Image style={styles.image} source={{ uri: item.thumbnail }}></Image>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 2,
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: "100%",
    minWidth: 280,
    minHeight: 280,
    borderRadius: 5,
  },
  text: {
    padding: 10,
    width: "60%",
    fontSize: 16,
    fontFamily: fonts.PoppinsR,
  },
  textContainer: {
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  title: { fontFamily: fonts.PoppinsB, fontSize: 20 },
  description: { fontFamily: fonts.PoppinsR, fontSize: 16, marginVertical: 5 },
  price: { fontFamily: fonts.PoppinsL, fontSize: 20 },
});
