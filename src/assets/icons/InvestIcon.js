import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../theme/colors";

const Investicon = ({ width = 26, height = 33, color = colors.primary }) => {
  return (
    <View>
      <Svg width={width} height={height} fill="none" viewBox="0 0 35 26">
        <Path
          d="M23.8871 26.5486C29.4723 26.5486 34 22.0209 34 16.4357C34 10.8505 29.4723 6.32275 23.8871 6.32275C18.3019 6.32275 13.7742 10.8505 13.7742 16.4357C13.7742 22.0209 18.3019 26.5486 23.8871 26.5486Z"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M23.8871 23.3548C27.7086 23.3548 30.8065 20.2569 30.8065 16.4355C30.8065 12.614 27.7086 9.51611 23.8871 9.51611C20.0656 9.51611 16.9677 12.614 16.9677 16.4355C16.9677 20.2569 20.0656 23.3548 23.8871 23.3548Z"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M16.4355 23.355H1V26.5485H20.6935V26.0163"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M14.8387 20.1611H2.06451V23.3547H16.4355"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M14.3064 16.9678H3.12903V20.1613H14.8387"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M14.3065 13.7739H1V16.9675H14.3065"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M15.9032 10.5806H2.06451V13.7741H14.3065"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M19.0968 7.38721H1V10.5808H15.9032"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M21.7581 6.85514V4.19385H2.06451V7.3874H19.0968"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
        <Path
          d="M1 1H20.6935V4.19355H1V1Z"
          stroke={color}
          strokeWidth="1.7071"
          strokeMiterLimit="10"
        />
      </Svg>
    </View>
  );
};

export default Investicon;
