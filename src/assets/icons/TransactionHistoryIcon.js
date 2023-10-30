import React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";
import { colors } from "../../theme/colors";

const TransactionHistoryIcon = ({
  width = 32,
  height = 32,
  color = colors.primary,
}) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} fill="none" viewBox="0 0 32 32">
        <Path
          opacity="0.7"
          d="M16 0L8.72727 4L16 8V5.33333C23.2073 5.33333 29.0909 10.7267 29.0909 17.3333C29.0909 23.94 23.2073 29.3333 16 29.3333C8.79273 29.3333 2.90909 23.94 2.90909 17.3333C2.90909 14.0627 4.19345 11.24 6.54545 9.08267L4.50036 7.20933C1.61455 9.85333 0 13.404 0 17.3333C0 25.3933 7.20727 32 16 32C24.7927 32 32 25.3933 32 17.3333C32 9.27333 24.7927 2.66667 16 2.66667V0ZM12.9542 8.75067L10.3185 9.91733L14 16.584C13.8885 16.8211 13.8268 17.0753 13.8182 17.3333V17.4173L9.136 21.7067L11.2291 23.6267L15.9113 19.3347H16C16.5787 19.3347 17.1336 19.124 17.5428 18.7489C17.9519 18.3738 18.1818 17.8651 18.1818 17.3347C18.1818 16.4147 17.5142 15.6507 16.5905 15.4173L12.9542 8.75067Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default TransactionHistoryIcon;
