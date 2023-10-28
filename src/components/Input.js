import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import { hp, wp } from "../utils/responsive-dimension";
import { colors } from "../theme/colors";

const Input = ({
  label,
  secureTextEntry = false,
  marginTop,
  placeholder = "Enter text",
  onChangeText,
  inputFocused,
  inputBlur,
  value,
  error,
  autoFocus,
  textAlign = "left",
  paddingVertical = hp(18),
  paddingHorizontal = wp(16),
  width = "100%",
  inputWidth = "100%",
  leftElement,
  rightElement,
  inputContainerStyles,
  inputStyles,
  editable = true,
  greyOutUneditableInput = true,
  placeholderTextColor = colors.gray3,
  textInputStyle = {},
  ...rest
}) => {
  const styles = {
    inputContainer: {
      marginTop: marginTop,
      borderRadius: wp(16),
      backgroundColor:
        !editable && greyOutUneditableInput ? colors.grey : colors.transparent,
      paddingVertical,
      paddingHorizontal,
      width,
      borderColor: error ? "#D0040480" : "#E0E0E0",
      borderWidth: wp(1),
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textInput: {
      flex: 1,
      fontFamily: "Fellix-Regular",
      color: colors.black,
      fontSize: wp(14),
      lineHeight: hp(20),
      marginLeft: leftElement ? hp(12) : 0,
      marginRight: rightElement ? hp(12) : 0,
      paddingVertical: 0,
      textAlign,
    },
    errorInput: {
      borderWidth: 1,
    },
    errorText: {
      marginTop: 10,
      fontWeight: "500",
    },
  };

  return (
    <View style={inputContainerStyles}>
      {label && (
        <CustomText.BodySmall
          fontFamily="Fellix-SemiBold"
          marginBottom={wp(8)}
          fontSize={wp(18)}
        >
          {label}
        </CustomText.BodySmall>
      )}
      <View style={[styles.inputContainer, inputStyles]}>
        <View>{leftElement}</View>

        <TextInput
          style={[
            { fontFamily: "Fellix-Regular", width: inputWidth },
            textInputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onBlur={inputBlur}
          onChangeText={onChangeText}
          onFocus={inputFocused}
          secureTextEntry={secureTextEntry}
          value={value}
          {...rest}
        />
        <View>{rightElement}</View>
      </View>
      {error && (
        <CustomText.Caption marginTop={hp(8)}>{error}</CustomText.Caption>
      )}
    </View>
  );
};

export default Input;
