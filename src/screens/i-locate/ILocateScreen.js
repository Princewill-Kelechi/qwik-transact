import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { CustomText, Input, Button, CustomBottomSheet } from "../../components";
import globalStyles from "../../styles/globalStyles";
import { wp, hp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowBackIcon,
  DirectionsIcon,
  EmailIcon,
  LocationIcon,
  LocationIcon2,
  PhoneIcon,
  SearchIcon,
} from "../../assets/icons";
import MapView, { Marker, Callout } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { LocationData } from "../../utils/LocationData";
import { agentMarker, atmMarker, womanProfile } from "../../theme/images";

const tokyoRegion = {
  latitude: 35.6762,
  longitude: 139.6503,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function ILocateScreen() {
  const navigation = useNavigation();
  const [showSheet, setShowSheet] = useState(false);

  const styles = StyleSheet.create({
    balanceContainer: {
      height: hp(60),
      width: "100%",
      marginTop: wp(50),
      paddingHorizontal: wp(20),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    linkContainer: {
      backgroundColor: colors.white,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      elevation: wp(10),
      height: wp(48),
      paddingHorizontal: wp(20),
    },
    map: {
      width: "100%",
      height: "100%",
    },
    container: {
      position: "relative",
    },

    inputContainer: {
      position: "absolute",
      top: wp(30),
      width: "100%",
      height: "100%",
      paddingHorizontal: wp(20),
    },
    iconContainer: {
      width: wp(40),
      height: wp(40),
      borderRadius: wp(100),
      padding: wp(8),
      backgroundColor: "hsla(0, 0%, 97%, 1)",
    },
  });

  const RenderMarker = (data) => {
    const image = data?.type == "atm" ? atmMarker : agentMarker;
    return (
      <Marker
        coordinate={{
          latitude: data?.latitude,
          longitude: data?.longitude,
        }}
        onPress={(e) => setShowSheet(true)}
      >
        <TouchableOpacity
          onPress={() => console.log(data)}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: wp(200),
            height: wp(200),
          }}
        >
          <Image source={image} style={{ width: wp(40), height: wp(40) }} />
          <CustomText.BodyLarge
            fontFamily="Fellix-SemiBold"
            color={colors.primary}
          >
            QwikTransact {data?.type.toUpperCase()}
          </CustomText.BodyLarge>
        </TouchableOpacity>
      </Marker>
    );
  };

  const BottomSheetContent = () => {
    const styles = StyleSheet.create({
      main: {
        width: "100%",
        height: wp(400),
        alignItems: "center",
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
      },
    });
    return (
      <View style={styles.main}>
        <Image
          source={womanProfile}
          style={{ width: wp(59), height: wp(58), resizeMode: "contain" }}
        />
        <View style={[styles.row, { marginTop: wp(10) }]}>
          <Image
            source={agentMarker}
            style={{ width: wp(39), height: wp(31), resizeMode: "contain" }}
          />
          <CustomText.BodyLarge
            marginLeft={wp(10)}
            color={colors.black}
            fontSize={wp(18)}
          >
            Jae Edike
          </CustomText.BodyLarge>
        </View>
        <CustomText.BodyLarge
          fontFamily="Fellix-Bold"
          color={colors.black}
          marginTop={wp(20)}
        >
          QwikTransact ( FCMB Agent)
        </CustomText.BodyLarge>
        <View style={[styles.row, { marginTop: wp(10) }]}>
          <CustomText.BodySmall color={colors.error}>
            Closed
          </CustomText.BodySmall>
          <CustomText.BodySmall>{"  "}Opens 10 am Mon</CustomText.BodySmall>
        </View>
        <View style={[styles.row, { marginTop: wp(10) }]}>
          <LocationIcon2 />
          <CustomText.BodyLarge>
            25, Sulia road Sulia road, Ikeja
          </CustomText.BodyLarge>
        </View>
        <View
          style={[
            styles.row,
            {
              marginTop: wp(10),
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: wp(30),
            },
          ]}
        >
          <PhoneIcon />
          <EmailIcon />
          <DirectionsIcon />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.main}>
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBackIcon color={colors.white} />
          </TouchableOpacity>
          <View style={{ marginLeft: wp(100) }}>
            <CustomText.BodyLarge color={colors.white} fontSize={wp(23)}>
              i-Locate
            </CustomText.BodyLarge>
          </View>
        </LinearGradient>
        <View style={styles.linkContainer}>
          <TouchableOpacity>
            <CustomText.BodyLarge
              fontFamily="Fellix-SemiBold"
              color={colors.black}
            >
              All
            </CustomText.BodyLarge>
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomText.BodyLarge
              fontFamily="Fellix-SemiBold"
              color={colors.black}
            >
              ATM
            </CustomText.BodyLarge>
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomText.BodyLarge
              fontFamily="Fellix-SemiBold"
              color={colors.black}
            >
              Agent
            </CustomText.BodyLarge>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              longitude: 45.753,
              latitude: 43.33,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <View>{LocationData?.map((item) => RenderMarker(item))}</View>
          </MapView>
          <View
            style={[
              styles.inputContainer,
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignContent: "center",
              },
            ]}
          >
            <Input
              leftElement={<SearchIcon customStyles={{ marginLeft: wp(15) }} />}
              inputStyles={{
                backgroundColor: "hsla(0, 0%, 97%, 1)",
                borderRadius: wp(10),
                alignItems: "center",
                justifyContent: "center",
                borderWidth: wp(0),
              }}
              width="100%"
              textInputStyle={{ marginLeft: wp(5) }}
              placeholderTextColor={colors.gray3}
              placeholder="Search locations"
              paddingVertical={wp(15)}
            />
          </View>
        </View>
        <CustomBottomSheet
          content={<BottomSheetContent />}
          isVisible={showSheet}
          onClose={() => setShowSheet(!showSheet)}
          title={"i-Locate"}
        />
      </View>
    </SafeAreaView>
  );
}
