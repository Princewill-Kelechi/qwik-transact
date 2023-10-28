import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";

import { Platform, StyleSheet, Text, UIManager, View } from "react-native";
import SignUp from "./src/screens/auth/signup/signUp";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import customFonts from "./src/theme/fonts";
import { AppLoading } from "expo";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded, onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  return (
    <SafeAreaProvider>
      <SignUp />
    </SafeAreaProvider>
  );
}
