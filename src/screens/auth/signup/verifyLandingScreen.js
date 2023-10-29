import React from "react";
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
import { mailImage } from "../../../theme/images";

export default function VerifyLandingScreen() {
  const styles = StyleSheet.create({
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: wp(300),
    },
  });

  return (
    <SafeAreaView style={[globalStyles.main]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.uicontainer]}
      >
        <View style={styles.main}>
          <Image source={mailImage} />
          <View>
            <CustomText.BodyLarge
              fontFamily="Fellix-SemiBold"
              marginTop={wp(30)}
              color={colors.primary}
              textAlign="center"
            >
              Welcome to QwikTransact
            </CustomText.BodyLarge>
            <CustomText.BodyLarge
              textAlign="center"
              width={wp(330)}
              color={colors.gray2}
              marginTop={wp(15)}
            >
              A verification code has been sent to your email. Kindly verify
              your account now.
            </CustomText.BodyLarge>
          </View>
        </View>

        <Button marginTop={wp(250)} title="Proceed" />
      </ScrollView>
    </SafeAreaView>
  );
}
