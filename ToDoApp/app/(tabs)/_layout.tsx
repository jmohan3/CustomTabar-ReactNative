import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import  Colors  from "../src/Colors/colors";

const TabsRootLayOut = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.tabBarActive,
        tabBarInactiveTintColor: Colors.taBarInactive,
        tabBarStyle: { ...style.tabBar },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="settings" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsRootLayOut;

const style = StyleSheet.create({
  tabBar: {
    backgroundColor: "#1e293b",
    paddingTop: 5,
    borderTopColor: "yellow",
    borderTopWidth: 1,
    height:90
  },
});
