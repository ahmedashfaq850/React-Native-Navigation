import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerNavigator from "../drawer/DrawerNavigator";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
