import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CustomText, Input, Button } from "../../../components";
import globalStyles from "../../../styles/globalStyles";
import { wp, hp } from "../../../utils/responsive-dimension";
import { colors } from "../../../theme/colors";
import {
  useGetTestResponseQuery,
  useSignInMutation,
} from "../../../redux/auth/authApi";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { setToken, logIn } from "../../../redux/auth/authSlice";

export default function SignIn() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const loginData = {
    username: username,
    password: password,
  };

  const signIn = async () => {
    setLoading(true);
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        dispatch(setToken(data?.token));
        dispatch(logIn());
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globalStyles.uicontainer}
      >
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
            please sign into your account
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
              Username
            </CustomText.BodySmall>
            <Input
              placeholder="Enter username"
              onChangeText={(text) => setUsername(text)}
            />
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
            <Input
              placeholder="Enter password"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EnterEmail")}>
            <CustomText.BodySmall alignSelf={"flex-end"} marginTop={wp(10)}>
              Forgotten password?
            </CustomText.BodySmall>
          </TouchableOpacity>

          <Button
            marginTop={wp(150)}
            onPress={() => signIn()}
            title={"Login"}
            loading={loading}
          />
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
          textColor={colors.black}
          disabled={true}
          title={"Login with BVN"}
        />
        <View
          style={[
            globalStyles.flexRow,
            { alignSelf: "center", marginTop: wp(20) },
          ]}
        >
          <CustomText.BodyLarge color={colors.primaryGray}>
            Don't have an account?{" "}
          </CustomText.BodyLarge>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <CustomText.BodyLarge color={colors.primary}>
              Signup
            </CustomText.BodyLarge>
          </TouchableOpacity>
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
            By Signing in, you agree to our{" "}
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
