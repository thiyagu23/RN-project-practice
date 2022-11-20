import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const theme = useSelector((state) => state.theme.value);
  return <Text style={{ backgroundColor: { theme } }}>Home</Text>;
};

export default Home;

const styles = StyleSheet.create({});
