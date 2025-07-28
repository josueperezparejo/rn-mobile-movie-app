import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { getMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Index = () => {
  const router = useRouter();

  const {
    data: movies,
    error,
    loading,
    refetch,
    reset,
  } = useFetch(() => getMovies({ query: "" }), true);

  console.log(movies);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />

      <ScrollView
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        className="flex-1 px-5"
      >
        <Image source={icons.logo} className="mx-auto mb-5 mt-20 h-10 w-12" />

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : error ? (
          <Text className="text-red-500">{error}</Text>
        ) : (
          <View className="mt-5 flex-1">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />

            <>
              <Text className="mb-3 mt-5 text-lg font-bold text-white">
                Latest Movies
              </Text>

              <FlatList
                data={movies?.results}
                renderItem={({ item }) => (
                  <View className="flex-row items-center gap-2">
                    <Text className="text-sm text-white">{item.title}</Text>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
