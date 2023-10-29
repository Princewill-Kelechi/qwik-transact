import React from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";

const CardIcon = ({ width = 28, height = 20, color = colors.gray1 }) => {
  return (
    <View>
      <Svg width={height} height={width} viewBox="0 0 28 20" fill="none">
        <Path
          d="M0 16.8182C0 17.6621 0.368749 18.4714 1.02513 19.0681C1.6815 19.6648 2.57174 20 3.5 20H24.5C25.4283 20 26.3185 19.6648 26.9749 19.0681C27.6313 18.4714 28 17.6621 28 16.8182V8.06818H0V16.8182ZM4.125 12.5C4.125 12.0479 4.32254 11.6144 4.67417 11.2947C5.02581 10.975 5.50272 10.7955 6 10.7955H9C9.49728 10.7955 9.97419 10.975 10.3258 11.2947C10.6775 11.6144 10.875 12.0479 10.875 12.5V13.6364C10.875 14.0884 10.6775 14.522 10.3258 14.8417C9.97419 15.1613 9.49728 15.3409 9 15.3409H6C5.50272 15.3409 5.02581 15.1613 4.67417 14.8417C4.32254 14.522 4.125 14.0884 4.125 13.6364V12.5ZM24.5 0H3.5C2.57174 0 1.6815 0.335227 1.02513 0.931933C0.368749 1.52864 0 2.33795 0 3.18182V4.65909H28V3.18182C28 2.33795 27.6313 1.52864 26.9749 0.931933C26.3185 0.335227 25.4283 0 24.5 0Z"
          fill={color}
          strokeWidth="2"
          opacity={"0.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default CardIcon;
