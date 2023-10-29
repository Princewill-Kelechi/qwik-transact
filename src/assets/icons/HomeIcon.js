import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";

const HomeIcon = ({ width = 25, height = 25, color = colors.gray1 }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
        <Path
          d="M0 25V8.33333L12.5 0L25 8.33333V25H15.625V15.2778H9.375V25H0Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default HomeIcon;

