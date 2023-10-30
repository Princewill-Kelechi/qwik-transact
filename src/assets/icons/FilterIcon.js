import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const FilterIcon = () => {
  return (
    <View>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M3 7H21"
          stroke="#828282"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M6 12H18"
          stroke="#828282"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M10 17H14"
          stroke="#828282"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default FilterIcon;
