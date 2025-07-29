import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({ title, poster_path, release_date, id }: Movie) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const imageUri = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/600x400/1a1a1a/ffffff/png";

  return (
    <Link href={`/movies/${id}` as any} asChild>
      <TouchableOpacity className="mb-4 w-40 flex-1 p-2">
        <View className="relative">
          <Image
            source={{ uri: imageUri }}
            style={styles.poster}
            resizeMode="cover"
            onLoadStart={() => setImageLoading(true)}
            onLoadEnd={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
          />

          {imageLoading && (
            <View style={styles.loadingOverlay}>
              <Text className="text-white">Loading...</Text>
            </View>
          )}

          {imageError && (
            <View style={styles.errorOverlay}>
              <Text className="text-center text-white">Image Error</Text>
            </View>
          )}
        </View>

        <Text className="mt-2 text-sm font-bold text-white" numberOfLines={2}>
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  poster: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  errorOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
