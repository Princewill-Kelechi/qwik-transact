import React from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";

const EmailIcon = ({ width = 24, height = 24, color = colors.primary }) => {
  return (
    <View>
      <Svg width={height} height={width} viewBox="0 0 32 32" fill="none">
        <Path
          d="M15 6L9 9.75L3 6V4.5L9 8.25L15 4.5M15 3H3C2.1675 3 1.5 3.6675 1.5 4.5V13.5C1.5 13.8978 1.65804 14.2794 1.93934 14.5607C2.22064 14.842 2.60218 15 3 15H15C15.3978 15 15.7794 14.842 16.0607 14.5607C16.342 14.2794 16.5 13.8978 16.5 13.5V4.5C16.5 4.10218 16.342 3.72064 16.0607 3.43934C15.7794 3.15804 15.3978 3 15 3Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default EmailIcon;

