import {
  Pressable,
  StyleSheet,
  Keyboard,
  Text,
  TextInput,
  View,
} from "react-native";
import colors from "../utils/globals/colors";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = ({ handlerKeyword }) => {
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const handlerInput = (t) => setInput(t);

  const search = () => {
    const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (expression.test(input)) {
      setError("Caracteres no validos");
      return;
    }
    setError("");
    handlerKeyword(input);
    Keyboard.dismiss();
  };

  const resetSearch = () => {
    handlerKeyword("");
    handlerInput("");
    setError("");
  };

  return (
    <View>
      <View style={styles.container}>
        {/* <Pressable>
          <Ionicons name="arrow-back" size={30} color="black"></Ionicons>
        </Pressable> */}
        <TextInput
          placeholder="Buscar"
          style={styles.input}
          value={input}
          onChangeText={handlerInput}
        />

        <Pressable onPress={search}>
          <Ionicons name="search" size={30} color="black"></Ionicons>
        </Pressable>

        <Pressable onPress={resetSearch}>
          <Ionicons name="close" size={30} color="black"></Ionicons>
        </Pressable>
      </View>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    width: "70%",
    marginHorizontal: 5,
  },
  container: {
    backgroundColor: colors.grey,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    width: "80%",
    justifyContent: "center",
  },
});
