import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function LoginButton({ text, primary, secondary }) {
  const baseStyles = styles.base;
  const primaryStyles = primary ? styles.primary : {};
  const secondaryStyles = secondary ? styles.secondary : {};

  return (
    <TouchableOpacity style={[baseStyles, primaryStyles, secondaryStyles]}>
      <Text style={[styles.text, primary ? styles.primaryText : {}, secondary ? styles.secondaryText : {}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
    borderRadius: 40,
  },
  primary: {
    backgroundColor: "pink",
  },
  secondary: {
    backgroundColor: "white",
    borderColor: "pink",
    borderWidth: 2,
    borderStyle: "solid",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "pink",
  },
});

export default LoginButton;
