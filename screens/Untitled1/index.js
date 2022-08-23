import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 76,
      top: 124,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View><Text style={{
      left: 80,
      top: 293,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum…</Text><View style={{
      left: 135,
      top: 365,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View><View style={{
      left: 58,
      top: 474,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#b6219e",
      borderRadius: 0,
      color: "#777777"
    }}></View></View>;
};

export default Untitled1;