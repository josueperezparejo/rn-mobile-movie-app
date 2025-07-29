import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { getMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

const Search = () => {
  const router = useRouter();

  const {
    data: movies,
    error,
    loading,
    refetch,
    reset,
  } = useFetch(() => getMovies({ query: "iron man" }), true);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute z-0 w-full flex-1"
        resizeMode="cover"
      />

      <FlatList
        className="flex-1"
        data={movies?.results}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
          width: "100%",
        }}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListHeaderComponent={() => (
          <>
            <View className="mt-20 w-full flex-row items-center justify-center">
              <Image source={icons.logo} className="size-5 h-10 w-12" />
            </View>

            <View className="my-5 w-full flex-row items-center justify-center p-4">
              <SearchBar
                placeholder="Search for a movie"
                onPress={() => {
                  router.push("/search");
                }}
              />
            </View>
          </>
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
