import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { colors } from "../theme/colors";
import { wp } from "../utils/responsive-dimension";
import CustomText from "./CustomText";

const CustomBottomSheet = ({ isVisible, onClose, content, title }) => {
  const translateY = useRef(new Animated.Value(800)).current;

  const animateSheet = (toValue) => {
    Animated.timing(translateY, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  if (isVisible) {
    animateSheet(0);
  } else {
    animateSheet(800);
  }

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <View style={styles.header}>
        <CustomText.BodyLarge fontFamily="Fellix-SemiBold" color={colors.black}>
          {title}
        </CustomText.BodyLarge>
        <TouchableOpacity onPress={onClose}>
          <CustomText.BodyLarge>Close</CustomText.BodyLarge>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>{content}</View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: wp(10),
  },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    padding: 16,
  },
});

export default CustomBottomSheet;
