import { StyleSheet, Text, View } from "react-native";
import { store } from "./store";
import { Provider } from "react-redux";
import Main from "./Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({});
