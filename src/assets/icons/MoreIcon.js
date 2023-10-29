import React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";
import { colors } from "../../theme/colors";

const MoreIcon = ({ width = 28, height = 28, color = colors.primary }) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 28 28">
        <Defs>
          <ClipPath id="clip0">
            <Rect width={width} height={height} fill={color} />
          </ClipPath>
        </Defs>
        <G opacity="0.6" clipPath="url(#clip0)">
          <Path
            d="M16.4757 5.7179L22.309 5.70995L22.3169 11.5432L16.4841 11.5516L16.4757 5.7179ZM16.4903 16.4423L22.3236 16.4344L22.3316 22.2677L16.4987 22.276L16.4903 16.4423ZM5.75126 5.73253L11.5845 5.72458L11.5925 11.5578L5.75963 11.5662L5.75126 5.73253ZM5.76589 16.457L11.5992 16.449L11.6071 22.2823L5.77426 22.2907L5.76589 16.457Z"
            stroke={color}
            fill={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
};

export default MoreIcon;
