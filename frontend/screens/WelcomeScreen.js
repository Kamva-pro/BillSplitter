import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import LoginButton from "./LoginButton";
import SocialLoginButton from "./SocialLogin";

function WelcomePage() {
  const socialLogins = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a5b95ea241f3d3ab46c35c88616ba2d5b5cfb9f656d474bf2fca6e66e431505?apiKey=aa160fdff3a4485ea0c17c38ff605ad6&",
      alt: "Facebook login",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/863abbc673a069cb4172761abef776bbf4d164099e3e635dc82c2eebd8bd24c2?apiKey=aa160fdff3a4485ea0c17c38ff605ad6&",
      alt: "Google login",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e25da423c97e09ead65a6a53acbd3a59a29250dfd008d28f4c29c579f5307207?apiKey=aa160fdff3a4485ea0c17c38ff605ad6&",
      alt: "Apple login",
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/74f00a3d4ae4f096973046a950ae950886d9d48e125ba30f3c06b719b6bfb97c?apiKey=aa160fdff3a4485ea0c17c38ff605ad6&",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.section}>
        <LoginButton text="Login" primary />
        <LoginButton text="Create Account" secondary />
        <Text style={styles.continueText}>Or continue with</Text>
        <View style={styles.socialLoginContainer}>
          {socialLogins.map((login, index) => (
            <SocialLoginButton key={index} src={login.src} alt={login.alt} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 7,
    backgroundColor: "white",
    width: "100%",
  },
  image: {
    width: "100%",
    opacity: 0.75,
    aspectRatio: 0.85,
  },
  section: {
    position: "relative",
    top: -80, // Adjust this value as needed for the overlap
    zIndex: 10,
    flexDirection: "column",
    alignSelf: "center",
    paddingHorizontal: 36,
    paddingVertical: 36,
    marginTop: 0,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
  },
  continueText: {
    alignSelf: "center",
    marginTop: 24,
    fontSize: 12,
    fontWeight: "300",
    color: "black",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 36,
    gap: 1,
  },
});

export default WelcomePage;
