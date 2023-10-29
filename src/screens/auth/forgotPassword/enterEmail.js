import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CustomText, Input, Button } from "../../../components";
import globalStyles from "../../../styles/globalStyles";
import { wp, hp } from "../../../utils/responsive-dimension";
import { colors } from "../../../theme/colors";
import { ArrowBackIcon } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";

export default function EnterEmail() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    main: {},
    headerText: {
      marginTop: wp(50),
    },
    inputContainer: {
      marginTop: wp(70),
    },
  });

  return (
    <SafeAreaView style={[globalStyles.main]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.uicontainer]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <CustomText.BodyLarge
            color={colors.black}
            fontFamily="Fellix-Bold"
            fontSize={wp(24)}
          >
            Forgot Password
          </CustomText.BodyLarge>
          <CustomText.BodyLarge marginTop={wp(10)} width={wp(330)}>
            Enter the email address you registered with
          </CustomText.BodyLarge>
        </View>
        <View style={styles.inputContainer}>
          <CustomText.BodySmall
            fontFamily="Fellix-Regular"
            marginBottom={wp(8)}
            fontSize={wp(18)}
            color={colors.gray2}
          >
            Email Address
          </CustomText.BodySmall>
          <Input placeholder="Enter email address" />
        </View>

        <Button marginTop={wp(250)} title="Proceed" />
      </ScrollView>
    </SafeAreaView>
  );
}
