import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  onPress: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  return (
    <View className="flex-row items-center rounded-full bg-dark-200 px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#AB8BFF"}
      />

      <TextInput
        onPress={onPress}
        value=""
        placeholderTextColor={"#AB8BFF"}
        placeholder={placeholder}
        className="ml-2 flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
