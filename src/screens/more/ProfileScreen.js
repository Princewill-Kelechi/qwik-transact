import React from "react";
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
  ArrowBackIcon,
  CardlessCashIcon,
  CreateLoanIcon,
  FaqIcon,
  FundWalletIcon,
  InfoIcon,
  Investicon,
  InviteFriendsImage,
  LanguageIcon,
  LockIcon,
  LogoutIcon,
  NotificationIcon,
  ProfileIcon,
  ShieldIcon,
  ThreeDotIcon,
  TopUpIcon,
  TransactionHistoryIcon,
  TransferIcon,
  UtilitiesIcon,
  WebsiteIcon,
} from "../../assets/icons";
import {
  inviteFriendsImage,
  womanProfile,
  mailImage,
} from "../../theme/images";
import { LinearGradient } from "expo-linear-gradient";
import LoanIcon from "../../assets/icons/LoanIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";

export default function ProfileScreen() {
  const navigation = useNavigation();

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
      backgroundColor: "#3380FF",
    },
    iconContainer2: {},
    image: {
      width: wp(43),
      height: wp(42),
      resizeMode: "contain",
      marginLeft: wp(8),
    },
    balanceContainer: {
      width: "100%",
      height: hp(130),
      marginTop: wp(20),
      padding: wp(20),
    },
    btn: {
      backgroundColor: colors.white,
      borderRadius: wp(10),
      justifyContent: "center",
      alignItems: "center",
      height: wp(28),
      width: wp(148),
      marginTop: wp(10),
    },
    section: {
      marginTop: wp(30),
    },
    settingsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: wp(1),
      borderColor: colors.gray4,
      height: wp(80),
      padding: wp(15),
    },
    settings: {
      flexDirection: "row",
    },
    btn2: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: wp(97),
      height: hp(37),
    },
  });

  return (
    <SafeAreaView style={globalStyles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: wp(50) }}>
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
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Image source={womanProfile} style={styles.image} />
                  <View>
                    <CustomText.BodyLarge
                      fontSize={wp(14)}
                      color={colors.white}
                    >
                      Juliet Edike
                    </CustomText.BodyLarge>
                    <CustomText.BodyLarge
                      fontSize={wp(14)}
                      color={colors.white}
                    >
                      4261782709
                    </CustomText.BodyLarge>
                  </View>
                </View>
                <TouchableOpacity style={styles.btn}>
                  <CustomText.BodySmall color={"#898A8D"}>
                    Upgrade
                  </CustomText.BodySmall>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
                <NotificationIcon
                  hasNew
                  width={wp(22)}
                  height={wp(22)}
                  fillColor={colors.white}
                />
              </View>
            </View>
          </LinearGradient>
          <View style={globalStyles.uicontainer}>
            <CustomText.BodyLarge
              fontFamily="Fellix-SemiBold"
              color={colors.black}
              fontSize={wp(18)}
            >
              General
            </CustomText.BodyLarge>
            <View style={{ marginTop: wp(20) }}>
              <View
                style={[
                  styles.settingsContainer,
                  {
                    borderTopEndRadius: wp(25),
                    borderTopStartRadius: wp(25),
                    borderBottomWidth: wp(0.5),
                  },
                ]}
              >
                <View style={styles.settings}>
                  <LanguageIcon />
                  <CustomText.BodyLarge
                    fontFamily="Fellix-SemiBold"
                    fontSize={wp(14)}
                    color={colors.black}
                    marginLeft={wp(10)}
                  >
                    Language
                  </CustomText.BodyLarge>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CustomText.BodyLarge
                    marginRight={wp(20)}
                    color={colors.primary}
                  >
                    English
                  </CustomText.BodyLarge>
                  <ChevronRightIcon />
                </View>
              </View>
              <View
                style={[
                  styles.settingsContainer,
                  { borderTopWidth: wp(0.5), borderBottomWidth: wp(0.5) },
                ]}
              >
                <View style={styles.settings}>
                  <ProfileIcon />
                  <CustomText.BodyLarge
                    fontFamily="Fellix-SemiBold"
                    fontSize={wp(14)}
                    color={colors.black}
                    marginLeft={wp(10)}
                  >
                    Account Type
                  </CustomText.BodyLarge>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CustomText.BodyLarge
                    marginRight={wp(20)}
                    color={colors.primary}
                  >
                    Tier 1
                  </CustomText.BodyLarge>
                  <ChevronRightIcon />
                </View>
              </View>
              <View
                style={[
                  styles.settingsContainer,
                  {
                    borderTopWidth: wp(0.5),
                    borderBottomRightRadius: wp(25),
                    borderBottomLeftRadius: wp(25),
                  },
                ]}
              >
                <View style={styles.settings}>
                  <LockIcon />
                  <CustomText.BodyLarge
                    fontFamily="Fellix-SemiBold"
                    fontSize={wp(14)}
                    color={colors.black}
                    marginLeft={wp(10)}
                  >
                    Change PIN
                  </CustomText.BodyLarge>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronRightIcon />
                </View>
              </View>
            </View>
            <CustomText.BodyLarge
              fontFamily="Fellix-SemiBold"
              color={colors.black}
              fontSize={wp(18)}
              marginTop={wp(20)}
            >
              More Information
            </CustomText.BodyLarge>
            <View style={{ marginTop: wp(20) }}>
              <View
                style={[
                  styles.settingsContainer,
                  {
                    borderTopEndRadius: wp(25),
                    borderTopStartRadius: wp(25),
                    borderBottomWidth: wp(0.5),
                  },
                ]}
              >
                <View style={styles.settings}>
                  <ShieldIcon />
                  <CustomText.BodyLarge
                    fontFamily="Fellix-SemiBold"
                    fontSize={wp(14)}
                    color={colors.black}
                    marginLeft={wp(10)}
                  >
                    Privacy Policy
                  </CustomText.BodyLarge>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronRightIcon />
                </View>
              </View>
              <View
                style={[
                  styles.settingsContainer,
                  { borderTopWidth: wp(0.5), borderBottomWidth: wp(0.5) },
                ]}
              >
                <View style={styles.settings}>
                  <InfoIcon />
                  <CustomText.BodyLarge
                    fontFamily="Fellix-SemiBold"
                    fontSize={wp(14)}
                    color={colors.black}
                    marginLeft={wp(10)}
                  >
                    About Us
                  </CustomText.BodyLarge>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronRightIcon />
                </View>
              </View>
              <View
                style={[
                  styles.settingsContainer,
                  { borderTopWidth: wp(0.5), borderBottomWidth: wp(0.5) },
                ]}
              >
                <View style={styles.settings}>
                  <FaqIcon />
                  <CustomText.BodyLarge
                    fontFamily="Fellix-SemiBold"
                    fontSize={wp(14)}
                    color={colors.black}
                    marginLeft={wp(10)}
                  >
                    FAQs
                  </CustomText.BodyLarge>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronRightIcon />
                </View>
              </View>
              <View
                style={[
                  styles.settingsContainer,
                  {
                    borderTopWidth: wp(0.5),
                    borderBottomRightRadius: wp(25),
                    borderBottomLeftRadius: wp(25),
                  },
                ]}
              >
                <View style={styles.settings}>
                  <WebsiteIcon />
                  <CustomText.BodyLarge
                    fontFamily="Fellix-SemiBold"
                    fontSize={wp(14)}
                    color={colors.black}
                    marginLeft={wp(10)}
                  >
                    Visit our Website
                  </CustomText.BodyLarge>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronRightIcon />
                </View>
              </View>
            </View>
            <View
              style={{
                paddingVertical: wp(30),
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.btn2,
                  {
                    borderWidth: wp(2),
                    borderColor: colors.primary,
                    borderRadius: wp(6),
                  },
                ]}
              >
                <ArrowBackIcon color={colors.primary} />
                <CustomText.BodyLarge color={colors.primary}>
                  Back
                </CustomText.BodyLarge>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn2,
                  {
                    backgroundColor: colors.primary,
                    borderRadius: wp(6),
                    width: wp(114),
                  },
                ]}
              >
                <CustomText.BodyLarge marginRight={wp(5)} color={colors.white}>
                  Logout
                </CustomText.BodyLarge>
                <LogoutIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
