import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const SearchIcon = ({ customStyles = {}, width = 16, height = 16 }) => {
  return (
    <View style={customStyles}>
      <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
        <Path
          d="M7.33331 13.333C10.647 13.333 13.3333 10.6467 13.3333 7.33301C13.3333 4.0193 10.647 1.33301 7.33331 1.33301C4.0196 1.33301 1.33331 4.0193 1.33331 7.33301C1.33331 10.6467 4.0196 13.333 7.33331 13.333Z"
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.6199 13.7929C12.9733 14.8595 13.7799 14.9662 14.3999 14.0329C14.9666 13.1795 14.5933 12.4795 13.5666 12.4795C12.8066 12.4729 12.3799 13.0662 12.6199 13.7929Z"
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SearchIcon;
