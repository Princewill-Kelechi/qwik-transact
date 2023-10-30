import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LanguageIcon = () => {
  return (
    <View>
      <Svg width={20} height={20} viewBox="0 0 20 20">
        <Path
          d="M10.7909 13.07L8.48182 10.56L8.50909 10.53C10.0492 8.6471 11.1999 6.41925 11.8818 4H14.5455V2H8.18182V0H6.36364V2H0V4H10.1545C9.54545 5.92 8.58182 7.75 7.27273 9.35C6.42727 8.32 5.72727 7.19 5.17273 6H3.35455C4.01818 7.63 4.92727 9.17 6.06364 10.56L1.43636 15.58L2.72727 17L7.27273 12L10.1 15.11L10.7909 13.07ZM15.9091 8H14.0909L10 20H11.8182L12.8364 17H17.1545L18.1818 20H20L15.9091 8ZM13.5273 15L15 10.67L16.4727 15H13.5273Z"
          fill="#3D87F4"
        />
      </Svg>
    </View>
  );
};

export default LanguageIcon;
