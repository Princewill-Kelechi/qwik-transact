import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { CustomText, Input, Button } from "../../../components";
import globalStyles from "../../../styles/globalStyles";
import { wp, hp } from "../../../utils/responsive-dimension";
import { colors } from "../../../theme/colors";

export default function SignUp() {
  const styles = StyleSheet.create({
    header: {
      marginTop: wp(20),
    },
    headerText: {
      display: "flex",
      flexDirection: "row",
    },
    formContainer: {
      marginTop: hp(80),
    },
    inputContainer: {
      marginTop: wp(30),
    },
    divider: {
      width: "50%",
      height: wp(2),
      backgroundColor: "rgba(207, 207, 207, 1)",
    },
  });

  return (
    <SafeAreaView style={globalStyles.main}>
      <ScrollView style={globalStyles.uicontainer}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <CustomText.Header fontSize={wp(24)} color={colors.grey1}>
              Welcome To
            </CustomText.Header>
            <CustomText.Header fontSize={wp(24)} color={colors.primary}>
              {" "}
              QwikTransact
            </CustomText.Header>
          </View>
          <CustomText.BodyLarge marginTop={wp(10)}>
            let's get to know you more
          </CustomText.BodyLarge>
        </View>
        <View style={styles.formContainer}>
          <View>
            <CustomText.BodySmall
              fontFamily="Fellix-Regular"
              marginBottom={wp(8)}
              fontSize={wp(18)}
              color={colors.gray2}
            >
              Full name
            </CustomText.BodySmall>
            <Input placeholder="Enter full name" />
          </View>
          <View style={styles.inputContainer}>
            <CustomText.BodySmall
              fontFamily="Fellix-Regular"
              marginBottom={wp(8)}
              fontSize={wp(18)}
              color={colors.gray2}
            >
              Email
            </CustomText.BodySmall>
            <Input placeholder="Enter email address" />
          </View>
          <View style={styles.inputContainer}>
            <CustomText.BodySmall
              fontFamily="Fellix-Regular"
              marginBottom={wp(8)}
              fontSize={wp(18)}
              color={colors.gray2}
            >
              Username
            </CustomText.BodySmall>
            <Input placeholder="Enter username" />
          </View>
          <View style={styles.inputContainer}>
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
            <Input placeholder="Confirm password" />
          </View>
          <Button marginTop={wp(50)} disabled={true} title={"Sign Up"} />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: wp(30),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.divider}></View>
          <CustomText.BodyLarge paddingHorizontal={wp(10)}>
            OR
          </CustomText.BodyLarge>
          <View style={styles.divider}></View>
        </View>
        <Button
          borderColor={colors.primary}
          borderWidth={wp(2)}
          backgroundColor={colors.white}
          marginTop={wp(30)}
          textColor={colors.primary}
          disabled={true}
          title={"Signup with BVN"}
        />
        <View
          style={[
            globalStyles.flexRow,
            { alignSelf: "center", marginTop: wp(20) },
          ]}
        >
          <CustomText.BodyLarge color={colors.primaryGray}>
            Already have an account?
          </CustomText.BodyLarge>
          <CustomText.BodyLarge color={colors.primary}>
            Log in
          </CustomText.BodyLarge>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              alignSelf: "center",
              paddingVertical: wp(30),
            },
          ]}
        >
          <CustomText.BodyLarge textAlign="center">
            By Signing up, you agree to our{" "}
            {
              <CustomText.BodyLarge color={colors.primary}>
                terms of services
              </CustomText.BodyLarge>
            }{" "}
            and that you have read our{" "}
            {
              <CustomText.BodyLarge color={colors.primary}>
                privacy policy
              </CustomText.BodyLarge>
            }{" "}
          </CustomText.BodyLarge>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
