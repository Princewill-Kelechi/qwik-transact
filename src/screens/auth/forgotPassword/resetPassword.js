import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { CustomText, Input, Button } from "../../../components";
import globalStyles from "../../../styles/globalStyles";
import { wp, hp } from "../../../utils/responsive-dimension";
import { colors } from "../../../theme/colors";
import { ArrowBackIcon } from "../../../assets/icons";

export default function ResetPassword() {
  const styles = StyleSheet.create({
    main: {},
    headerText: {
      marginTop: wp(50),
    },
    mainInputContainer: {
      marginTop: wp(70),
    },
    inputContainer: {
      marginTop: wp(20),
    },
  });

  return (
    <SafeAreaView style={[globalStyles.main]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.uicontainer]}
      >
        <ArrowBackIcon />
        <View style={styles.headerText}>
          <CustomText.BodyLarge
            color={colors.black}
            fontFamily="Fellix-Bold"
            fontSize={wp(24)}
          >
            Rest Password
          </CustomText.BodyLarge>
          <CustomText.BodyLarge marginTop={wp(10)} width={wp(330)}>
            Enter new password
          </CustomText.BodyLarge>
        </View>
        <View style={styles.mainInputContainer}>
          <CustomText.BodySmall
            fontFamily="Fellix-Regular"
            marginBottom={wp(8)}
            fontSize={wp(18)}
            color={colors.gray2}
          >
            Password
          </CustomText.BodySmall>
          <Input placeholder="Enter password" />
        </View>
        <View style={styles.inputContainer}>
          <CustomText.BodySmall
            fontFamily="Fellix-Regular"
            marginBottom={wp(8)}
            fontSize={wp(18)}
            color={colors.gray2}
          >
            Confirm Password
          </CustomText.BodySmall>
          <Input placeholder="Re enter password" />
        </View>
        <Button marginTop={wp(250)} title="Proceed" />
      </ScrollView>
    </SafeAreaView>
  );
}
