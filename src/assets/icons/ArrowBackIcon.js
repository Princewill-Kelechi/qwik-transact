import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { wp } from "../../utils/responsive-dimension";

const ArrowBackIcon = () => {
  return (
    <View>
      <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
        <Path
          d="M13.57 9.93005L7.5 16.0001L13.57 22.0701"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M24.5 16H7.67004"
          stroke="#292D32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default ArrowBackIcon;
