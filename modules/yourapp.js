import React from "react";
import { StyleSheet, View, Text } from "react-native";

const YourApp = () => {
  return <View style={styles.container} __uuid__="0d3ca19c-ec5d-4394-88d9-f18bc1380e20">
      <Text style={styles.text} __uuid__="f640d847-b720-4e00-afb5-cafc5d3fe75c">Welcome to your brand new app!</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    padding: 13
  },
  text: {
    fontSize: 20
  }
});
export const YourAppModule = {
  name: "YourApp",
  path: "./",
  package: "@modules",
  value: {
    title: "Your App",
    navigator: YourApp
  }
};