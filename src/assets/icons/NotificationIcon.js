import React from "react";
import { View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import { colors } from "../../theme/colors";

const NotificationIcon = ({
  width = 16,
  height = 17,
  fillColor = colors.primary,
  circleFillColor = colors.error,
  circleStrokeColor = colors.error,
  circleStrokeWidth = 1.5,
  hasNew = false,
}) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 16 17">
        <Path
          d="M4.23375 14.25C4.39578 14.7914 4.72813 15.2662 5.18144 15.6037C5.63475 15.9412 6.18484 16.1235 6.75 16.1235C7.31516 16.1235 7.86525 15.9412 8.31856 15.6037C8.77187 15.2662 9.10422 14.7914 9.26625 14.25H4.23375ZM0 13.5H13.5V11.25L12 9V5.25C12 4.56056 11.8642 3.87787 11.6004 3.24091C11.3365 2.60395 10.9498 2.0252 10.4623 1.53769C9.9748 1.05018 9.39605 0.66347 8.75909 0.399632C8.12213 0.135795 7.43944 0 6.75 0C6.06056 0 5.37787 0.135795 4.74091 0.399632C4.10395 0.66347 3.5252 1.05018 3.03769 1.53769C2.55018 2.0252 2.16347 2.60395 1.89963 3.24091C1.6358 3.87787 1.5 4.56056 1.5 5.25V9L0 11.25V13.5Z"
          fill={fillColor}
        />
        {hasNew && (
          <Circle
            cx="11.5"
            cy="4.5"
            r="3.25"
            fill={circleFillColor}
            stroke={circleStrokeColor}
            strokeWidth={circleStrokeWidth}
          />
        )}
      </Svg>
    </View>
  );
};

export default NotificationIcon;
