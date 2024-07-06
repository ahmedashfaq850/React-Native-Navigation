import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>Screen1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
