import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../theme/colors";

const FaqIcon = ({ width = 24, height = 24, color = colors.primary }) => {
  return (
    <View>
      <Svg width={height} height={width} fill={color} viewBox="0 0 24 24">
        <Path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Zm1-4.5v2H11v-2Zm3-7a3.984,3.984,0,0,1-1.5,3.122A3.862,3.862,0,0,0,13.063,15H11.031a5.813,5.813,0,0,1,2.219-3.936A2,2,0,0,0,13.1,7.832a2.057,2.057,0,0,0-2-.14A1.939,1.939,0,0,0,10,9.5,1,1,0,0,1,8,9.5V9.5a3.909,3.909,0,0,1,2.319-3.647,4.061,4.061,0,0,1,3.889.315A4,4,0,0,1,16,9.5Z" />
      </Svg>
    </View>
  );
};

export default FaqIcon;
