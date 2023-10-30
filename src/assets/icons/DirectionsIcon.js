import React from "react";
import { View } from "react-native";
import Svg, { Path, G, ClipPath, Defs, Rect } from "react-native-svg";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";

const DirectionsIcon = ({
  width = 18,
  height = 18,
  color = colors.primary,
}) => {
  return (
    <View>
      <Svg width={height} height={width} viewBox="0 0 18 18" fill="none">
        <G clipPath="url(#clip0_224_2281)">
          <Path
            d="M6.75003 7.50003C6.55112 7.50003 6.36036 7.57905 6.2197 7.71971C6.07905 7.86036 6.00003 8.05112 6.00003 8.25003V11.25H7.50003V9.00003H9.75003V10.875L12.375 8.25003L9.75003 5.62503V7.50003H6.75003ZM9.53028 1.04479L16.9553 8.46979C17.0959 8.61043 17.1749 8.80116 17.1749 9.00003C17.1749 9.19891 17.0959 9.38964 16.9553 9.53028L9.53028 16.9553C9.38964 17.0959 9.19891 17.1749 9.00003 17.1749C8.80116 17.1749 8.61043 17.0959 8.46979 16.9553L1.04479 9.53028C0.904182 9.38964 0.825195 9.19891 0.825195 9.00003C0.825195 8.80116 0.904182 8.61043 1.04479 8.46979L8.46979 1.04479C8.61043 0.904182 8.80116 0.825195 9.00003 0.825195C9.19891 0.825195 9.38964 0.904182 9.53028 1.04479Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_224_2281">
            <Rect width={width} height={height} fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default DirectionsIcon;
