import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { wp, hp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { CustomText } from "../../components";
import { CardIcon, HomeIcon } from "../../assets/icons";
import LocationIcon from "../../assets/icons/LocationIcon";
import MoreIcon from "../../assets/icons/MoreIcon";

function CustomBottomTab({ state, descriptors, navigation }) {
  const activeColorStroke = colors.veryDarkBlue;
  const inactiveColorStroke = colors.grey;

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const getIcon = (type) => {
          switch (type) {
            case "Home":
              return (
                <HomeIcon
                  width={24}
                  height={24}
                  active={isFocused}
                  color={isFocused ? activeColorStroke : inactiveColorStroke}
                />
              );
            case "i-Locate":
              return (
                <LocationIcon
                  active={isFocused}
                  width={26}
                  height={26}
                  color={isFocused ? activeColorStroke : inactiveColorStroke}
                />
              );
            case "Card":
              return (
                <CardIcon
                  width={28}
                  height={20}
                  active={isFocused}
                  color={isFocused ? activeColorStroke : inactiveColorStroke}
                />
              );
            case "More":
              return (
                <MoreIcon
                  width={28}
                  height={28}
                  active={isFocused}
                  color={isFocused ? activeColorStroke : inactiveColorStroke}
                />
              );

            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={onPress}
            key={label}
            style={[styles.tabContainer]}
          >
            <>
              {getIcon(label)}
              <CustomText.Caption
                marginTop={hp(6)}
                color={isFocused ? activeColorStroke : inactiveColorStroke}
              >
                {label}
              </CustomText.Caption>
            </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    shadowOffset: {
      width: 4,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 18,
    shadowColor: "#00000049",
    elevation: 5,
  },
  tabContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp(8),
    paddingBottom: hp(30),
    paddingTop: hp(16),
    backgroundColor: colors.white,
  },
  tabTitle: {
    paddingTop: hp(15),
    letterSpacing: wp(0.2),
    fontSize: wp(10),
    lineHeight: hp(12),
  },
  activeTitle: {
    color: colors.white,
  },
  inActiveTitle: {
    color: colors.veryDarkBlue,
  },
});

export default CustomBottomTab;
