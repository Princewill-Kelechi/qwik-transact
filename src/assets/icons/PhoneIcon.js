import React from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";

const PhoneIcon = ({ width = 24, height = 24, color = colors.primary }) => {
  return (
    <View>
      <Svg width={height} height={width} viewBox="0 0 32 32" fill="none">
        <Path
          d="M14.9625 15.75C13.4 15.75 11.8532 15.4125 10.3222 14.7375C8.79125 14.0625 7.4005 13.1 6.15 11.85C4.9 10.6 3.9375 9.2125 3.2625 7.6875C2.5875 6.1625 2.25 4.6125 2.25 3.0375V2.25H6.675L7.36875 6.01875L5.23125 8.175C5.50625 8.6625 5.8125 9.125 6.15 9.5625C6.4875 10 6.85 10.4062 7.2375 10.7812C7.6 11.1438 7.997 11.4907 8.4285 11.8222C8.86 12.1537 9.3255 12.463 9.825 12.75L12 10.575L15.75 11.3438V15.75H14.9625Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default PhoneIcon;
