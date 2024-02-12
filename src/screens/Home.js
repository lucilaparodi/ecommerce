import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header";
import CardCategory from "../components/CardCategory";
import Categories from "../components/Categories";

const Home = ({ selectedCategoryState }) => {
  return (
    <View>
      <Header title="Home" />
      <Categories selectedCategoryState={selectedCategoryState} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
