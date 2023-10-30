import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LogoutIcon = () => {
  return (
    <View>
      <Svg width={19} height={17} viewBox="0 0 19 17" fill="none">
        <Path
          d="M13.9444 12L17.5 8.5M17.5 8.5L13.9444 5M17.5 8.5H5.05556M10.3889 12V12.875C10.3889 13.5712 10.1079 14.2389 9.60784 14.7312C9.10774 15.2234 8.42947 15.5 7.72222 15.5H4.16667C3.45942 15.5 2.78115 15.2234 2.28105 14.7312C1.78095 14.2389 1.5 13.5712 1.5 12.875V4.125C1.5 3.42881 1.78095 2.76113 2.28105 2.26884C2.78115 1.77656 3.45942 1.5 4.16667 1.5H7.72222C8.42947 1.5 9.10774 1.77656 9.60784 2.26884C10.1079 2.76113 10.3889 3.42881 10.3889 4.125V5"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default LogoutIcon;
