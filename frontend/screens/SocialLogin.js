import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

function SocialLoginButton({ src, alt }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={{ uri: src }}
        alt={alt}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 52,
    height: 52,
    aspectRatio: 1,
  },
});

export default SocialLoginButton;
