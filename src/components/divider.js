import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { colors } from "../theme/colors";
import { wp } from "../utils/responsive-dimension";

function Divider(
  text = "",
  color = colors.grey,
  textColor = colors.grey,
  customStyles={}
) {
  const styles = StyleSheet.create({
    container: {
    //   width: "100%",
      height: wp(2),
      backgroundColor: colors.grey1,
      ...customStyles,
    },
    fulldivider: {
      width: "100%",
      height: wp(2),
      backgroundColor: colors.grey1,
    },
    halfDivider: {
      width: "50%",
      height: wp(2),
      backgroundColor: colors.grey1,
    },
  });
  return (
    <View style={styles.container}>
      {/* {text ? (
        <View styles={styles.fulldivider}></View>
      ) : (
        <View>
          <View style={styles.halfDivider}></View>
          <CustomText.BodyLarge paddingHorizontal={wp(10)} color={textColor}>
            {text}
          </CustomText.BodyLarge>
          <View style={styles.halfDivider}></View>
        </View>
      )} */}
    </View>
  );
}

export default Divider;
