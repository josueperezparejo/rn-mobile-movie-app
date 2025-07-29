import MovieCard from "@/components/MovieCard";
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

  const renderHeader = () => (
    <View className="px-5">
      <Image source={icons.logo} className="mx-auto mb-5 mt-20 h-10 w-12" />
      <SearchBar
        onPress={() => router.push("/search")}
        placeholder="Search for a movie"
      />
      <Text className="mb-3 mt-5 text-lg font-bold text-white">
        Latest Movies
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute z-0 w-full" />
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute z-0 w-full" />
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />

      <FlatList
        className="flex-1"
        data={movies?.results}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
          width: "100%",
        }}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
