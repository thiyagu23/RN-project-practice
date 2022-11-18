import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Screens/Home";
import WishList from "./Screens/WishList";
import Cart from "./Screens/Cart";
import Profile from "./Screens/Profile";
import { store } from "./store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "WishList") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "Cart") {
                iconName = focused ? "cart" : "cart-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="WishList" component={WishList} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
