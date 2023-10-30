import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

const ChevronDownIcon = () => {
  return (
    <View width={16} height={16}>
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M13.28 5.9668L8.93333 10.3135C8.42 10.8268 7.58 10.8268 7.06667 10.3135L2.72 5.9668"
          stroke="#828282"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default ChevronDownIcon;
