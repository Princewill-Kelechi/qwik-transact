import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { CustomText } from "../../../components";
import { wp } from "../../../utils/responsive-dimension";
import { colors } from "../../../theme/colors";
import { ChevronDownIcon, ChevronUpIcon } from "../../../assets/icons";
import { maleAvatar, maleAvatar2 } from "../../../theme/images";

const LoanRequestCard = ({ loanData, onPress }) => {
  const styles = StyleSheet.create({
    loanCard: {
      height: wp(63),
      width: wp(380),
      elevation: wp(10),
      marginBottom: wp(40),
    },
  });

  return (
    <View style={styles.loanCard}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={maleAvatar2}
              style={{
                marginRight: wp(10),
                width: wp(43),
                height: wp(43),
                resizeMode: "contain",
              }}
            />
            <View style={{ alignItems: "flex-start" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText.BodyLarge
                  fontFamily="Fellix-SemiBold"
                  color={colors.black}
                >
                  {loanData.name}
                </CustomText.BodyLarge>
                <View style={{ marginLeft: wp(8) }}></View>
              </View>
              <CustomText.BodyLarge>
                Return on :{" "}
                <CustomText.BodyLarge color={colors.black}>
                  {loanData?.dueDate}
                </CustomText.BodyLarge>
              </CustomText.BodyLarge>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <CustomText.BodyLarge
              fontFamily="Fellix-SemiBold"
              fontSize={wp(14)}
              color={colors.primary}
            >
              {loanData?.amount}
            </CustomText.BodyLarge>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoanRequestCard;
