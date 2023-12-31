import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../theme/colors";

const AeroIcon = ({ width = 35, height = 35, color = colors.primary }) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 35 35">
        <Path
          d="M34.4546 0.214844C34.8843 0.527344 35.0601 0.94401 34.982 1.46484L29.9821 31.4648C29.917 31.8424 29.7086 32.1354 29.3571 32.3438C29.1748 32.4479 28.973 32.5 28.7516 32.5C28.6084 32.5 28.4521 32.4674 28.2829 32.4023L19.4354 28.7891L14.7089 34.5508C14.4745 34.8503 14.1555 35 13.7519 35C13.5826 35 13.4394 34.974 13.3222 34.9219C13.0748 34.8307 12.8763 34.6777 12.7265 34.4629C12.5768 34.248 12.5019 34.0104 12.5019 33.75V26.9336L29.3766 6.25L8.4981 24.3164L0.783405 21.1523C0.301644 20.9701 0.0412319 20.612 0.0021701 20.0781C-0.0238711 19.5573 0.184458 19.1732 0.627158 18.9258L33.1265 0.175781C33.3218 0.0585937 33.5302 0 33.7515 0C34.0119 0 34.2463 0.0716146 34.4546 0.214844Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default AeroIcon;
