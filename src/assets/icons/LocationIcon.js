import React from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";

const LocationIcon = ({ width = 24, height = 24, color = colors.gray1 }) => {
  return (
    <View>
      <Svg width={height} height={width} viewBox="0 0 32 32" fill="none">
        <G opacity={0.6}>
          <Path
            d="M1 13H4.6M21.4 13H25M13 1V4.6M13 21.4V25"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M13 21.4001C17.6392 21.4001 21.4 17.6393 21.4 13.0001C21.4 8.36091 17.6392 4.6001 13 4.6001C8.36081 4.6001 4.60001 8.36091 4.60001 13.0001C4.60001 17.6393 8.36081 21.4001 13 21.4001Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M13 16.5999C14.9882 16.5999 16.6 14.9881 16.6 12.9999C16.6 11.0117 14.9882 9.3999 13 9.3999C11.0118 9.3999 9.39999 11.0117 9.39999 12.9999C9.39999 14.9881 11.0118 16.5999 13 16.5999Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
};

export default LocationIcon;


