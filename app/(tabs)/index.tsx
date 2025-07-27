import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />

      <ScrollView
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        className="flex-1 px-5"
      >
        <Image source={icons.logo} className="mx-auto mb-5 mt-20 h-10 w-12" />

        <View className="mt-5 flex-1">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
