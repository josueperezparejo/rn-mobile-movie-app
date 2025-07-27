import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const TabBarIcon = ({
  focused,
  icon,
  label,
}: {
  focused: boolean;
  icon: any;
  label: string;
}) => {
  if (focused) {
    return (
      <ImageBackground
        className="mt-4 flex min-h-16 w-full min-w-[112px] flex-1 flex-row items-center justify-center overflow-hidden rounded-full"
        source={images.highlight}
      >
        <Image source={icon} tintColor={"#151312"} className="size-5" />
        <Text className="ml-2 text-base font-semibold text-secondary">
          {label}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="mt-4 size-full items-center justify-center rounded-full">
      <Image source={icon} tintColor={"#A8B25DB"} className="size-5" />
    </View>
  );
};
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 34,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon focused={focused} icon={icons.logo} label="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon focused={focused} icon={icons.search} label="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon focused={focused} icon={icons.save} label="Saved" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon focused={focused} icon={icons.person} label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
