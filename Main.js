import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Screens/Home";
import WishList from "./Screens/WishList";
import Cart from "./Screens/Cart";
import Profile from "./Screens/Profile";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
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
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="WishList" component={WishList} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const Home = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text onPress={() => navigation.navigate("Home")}></Text>
//       <Text onPress={() => navigation.navigate("WishList")}></Text>
//       <Text onPress={() => navigation.navigate("Cart")}></Text>
//       <Text onPress={() => navigation.navigate("Profile")}></Text>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-end",
//     padding: 20,
//   },
// });
