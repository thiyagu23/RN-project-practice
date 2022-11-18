import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={[isEnabled ? styles.darkMode : styles.lightMode]}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        size={30}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightMode: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 20,
  },
  darkMode: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundColor: "black",
    padding: 20,
  },
});

export default App;
