import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomDrawer = ({ ...props }) => {
  console.log(props);
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>CustomDrawer</Text>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
