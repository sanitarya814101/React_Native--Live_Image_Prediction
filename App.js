import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Image_Picker from "./Screens/Camera.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Image_Picker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
