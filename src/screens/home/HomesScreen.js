import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { CustomText, Input, Button } from "../../components";
import globalStyles from "../../styles/globalStyles";
import { wp, hp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { useGetTestResponseQuery } from "../../redux/auth/authApi";
import { useNavigation } from "@react-navigation/native";
import {
  AeroIcon,
  AgentIcon,
  CardlessCashIcon,
  CreateLoanIcon,
  FundWalletIcon,
  Investicon,
  InviteFriendsImage,
  NotificationIcon,
  ThreeDotIcon,
  TopUpIcon,
  TransactionHistoryIcon,
  TransferIcon,
  UtilitiesIcon,
} from "../../assets/icons";
import {
  inviteFriendsImage,
  womanProfile,
  mailImage,
} from "../../theme/images";
import { LinearGradient } from "expo-linear-gradient";
import LoanIcon from "../../assets/icons/LoanIcon";
import { BASE_URL } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { AlertHelper } from "../../utils/AlertHelper";
import { setProfile } from "../../redux/auth/authSlice";

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { token, profile } = useSelector((state) => state.auth);

  const fetchProfile = async () => {
    await fetch(BASE_URL + "profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch user profile");
        }
      })
      .then((data) => {
        console.log(data);
        AlertHelper.show("success", "success", "Got Profile");
        dispatch(setProfile(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const styles = StyleSheet.create({
    header: {
      marginTop: wp(20),
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: wp(28),
      height: wp(28),
      borderRadius: wp(30),
      backgroundColor: "#0468ef19",
    },
    iconContainer2: {},
    image: {
      width: wp(28),
      height: wp(28),
      resizeMode: "contain",
      marginLeft: wp(8),
    },
    balanceContainer: {
      flex: 1,
      width: "100%",
      height: hp(130),
      marginTop: wp(20),
      borderRadius: wp(10),
      padding: wp(20),
    },

    addAccount: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "flex-end",
      marginTop: wp(30),
      padding: wp(5),
      backgroundColor: " #0468ef19",
      borderRadius: wp(10),
    },
    section: {
      marginTop: wp(30),
      alignItems: "center",
    },
    quickaccess: {
      width: wp(380),
      height: hp(109),
      marginTop: wp(20),
      backgroundColor: colors.white,
      elevation: 5,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      borderRadius: wp(6),
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      //   marginHorizontal: wp(5),
    },
    accesslink: {
      width: wp(60),
      height: hp(60),
      backgroundColor: "#EAF3FF80",
      borderRadius: wp(11),
      padding: wp(10),
      justifyContent: "center",
      alignItems: "center",
    },
    linkContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    services: {
      width: "100%",
      //   height: hp(109),
      marginTop: wp(20),
      backgroundColor: colors.white,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      borderRadius: wp(6),
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    inviteFriendsImage: {
      width: wp(380),
      height: wp(173),
      resizeMode: "contain",
      marginTop: wp(20),
    },
  });

  return (
    <SafeAreaView style={globalStyles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globalStyles.uicontainer}
      >
        <View style={styles.header}>
          <View>
            <CustomText.BodySmall fontSize={wp(12)} color={colors.black}>
              Good Morning
            </CustomText.BodySmall>

            <CustomText.BodyLarge
              color={colors.black}
              fontSize={wp(18)}
              marginTop={wp(5)}
              fontWeight={wp(400)}
            >
              {profile?.fullName}
            </CustomText.BodyLarge>
          </View>
          <View style={[globalStyles.flexRow, styles.iconContainer2]}>
            <View style={styles.iconContainer}>
              <NotificationIcon />
            </View>
            <Image style={styles.image} source={womanProfile} />
          </View>
        </View>
        <View>
          <LinearGradient
            colors={[
              "rgba(64, 114, 189, 0.81)",
              "rgba(63, 123, 211, 0.78)",
              "rgba(30, 117, 243, 0.47)",
              "#3674CF",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.balanceContainer}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <CustomText.BodyLarge color={colors.white} fontSize={wp(18)}>
                  Account Balance
                </CustomText.BodyLarge>
                <CustomText.BodyLarge
                  fontWeight={wp(600)}
                  marginTop={wp(10)}
                  fontFamily="Fellix-SemiBold"
                  color={colors.white}
                  fontSize={wp(18)}
                >
                  ₦ {profile?.balance}
                </CustomText.BodyLarge>
              </View>
              <ThreeDotIcon />
            </View>
            {/* <View style={styles.addAccount}>
              <CustomText.BodySmall color={colors.primary}>
                Add Account
              </CustomText.BodySmall>
              <View>
                <CustomText.BodyLarge>+</CustomText.BodyLarge>
              </View>
            </View> */}
          </LinearGradient>
        </View>
        <View style={styles.section}>
          <CustomText.BodyLarge
            fontFamily="Fellix-SemiBold"
            fontSize={wp(23)}
            color={colors.black}
            alignSelf={"flex-start"}
          >
            Quick Access
          </CustomText.BodyLarge>
          <View style={styles.quickaccess}>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <AeroIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Send
              </CustomText.BodySmall>
            </View>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <LoanIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Quick Loan
              </CustomText.BodySmall>
            </View>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <AgentIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Agent Locator
              </CustomText.BodySmall>
            </View>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <FundWalletIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Fund Wallet
              </CustomText.BodySmall>
            </View>
          </View>
        </View>
        <View style={[styles.section, { marginTop: wp(50) }]}>
          <CustomText.BodyLarge
            fontFamily="Fellix-SemiBold"
            fontSize={wp(23)}
            color={colors.black}
            alignSelf={"flex-start"}
          >
            Services
          </CustomText.BodyLarge>
          <View style={styles.services}>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <TransferIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Transfer
              </CustomText.BodySmall>
            </View>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <AgentIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Near-by Agent
              </CustomText.BodySmall>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateLoanScreen")}
              style={styles.linkContainer}
            >
              <View style={styles.accesslink}>
                <CreateLoanIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Create Loan
              </CustomText.BodySmall>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <TopUpIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Top-up
              </CustomText.BodySmall>
            </View>
          </View>
          <View style={styles.services}>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <TransactionHistoryIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Transaction
              </CustomText.BodySmall>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                // marginTop={wp(1)}
              >
                History
              </CustomText.BodySmall>
            </View>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <CardlessCashIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Cardless Cash
              </CustomText.BodySmall>
            </View>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <Investicon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Invest
              </CustomText.BodySmall>
            </View>
            <View style={styles.linkContainer}>
              <View style={styles.accesslink}>
                <UtilitiesIcon />
              </View>
              <CustomText.BodySmall
                fontSize={wp(12)}
                color={colors.black}
                marginTop={wp(5)}
              >
                Utilities
              </CustomText.BodySmall>
            </View>
          </View>
        </View>
        <View style={[styles.section, { marginTop: wp(50) }]}>
          <CustomText.BodyLarge
            fontFamily="Fellix-SemiBold"
            fontSize={wp(23)}
            color={colors.black}
            alignSelf={"flex-start"}
          >
            Promo and Bonuses
          </CustomText.BodyLarge>
          <Image
            source={inviteFriendsImage}
            style={styles.inviteFriendsImage}
          />
          {/* <InviteFriendsImage /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
