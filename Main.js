import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Home")}></Text>
      <Text onPress={() => navigation.navigate("WishList")}></Text>
      <Text onPress={() => navigation.navigate("Cart")}></Text>
      <Text onPress={() => navigation.navigate("Profile")}></Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
  },
});
