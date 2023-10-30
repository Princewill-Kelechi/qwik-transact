import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../theme/colors";

const ThreeDotIcon = ({ width = 4, height = 15, color = colors.white, customStyles={} }) => {
  return (
    <View style={[styles.container, { width, height }, customStyles]}>
      <Svg width={width} height={height} viewBox="0 0 4 15">
        <Path
          d="M1.75 2.5C2.16421 2.5 2.5 2.16421 2.5 1.75C2.5 1.33579 2.16421 1 1.75 1C1.33579 1 1 1.33579 1 1.75C1 2.16421 1.33579 2.5 1.75 2.5Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.75 8C2.16421 8 2.5 7.66421 2.5 7.25C2.5 6.83579 2.16421 6.5 1.75 6.5C1.33579 6.5 1 6.83579 1 7.25C1 7.66421 1.33579 8 1.75 8Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.75 13.5C2.16421 13.5 2.5 13.1642 2.5 12.75C2.5 12.3358 2.16421 12 1.75 12C1.33579 12 1 12.3358 1 12.75C1 13.1642 1.33579 13.5 1.75 13.5Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
});

export default ThreeDotIcon;
