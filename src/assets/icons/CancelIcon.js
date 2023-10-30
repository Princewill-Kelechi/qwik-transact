import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const CancelIcon = () => {
  return (
    <View>
      <Svg width={34} height={34} viewBox="0 0 34 34" fill="none">
        <Path
          d="M12.7279 21.2129L21.2132 12.7276"
          stroke="#333333"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.2132 21.2138L12.7279 12.7285"
          stroke="#333333"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default CancelIcon;
