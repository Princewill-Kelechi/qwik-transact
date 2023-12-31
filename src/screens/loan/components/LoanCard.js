import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { CustomText } from "../../../components";
import { wp } from "../../../utils/responsive-dimension";
import { colors } from "../../../theme/colors";
import { ChevronDownIcon, ChevronUpIcon } from "../../../assets/icons";
import { maleAvatar } from "../../../theme/images";

const LoanCard = ({ loanData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const styles = StyleSheet.create({
    loanCard: {
      height: isExpanded ? wp(126) : wp(63),
      width: wp(380),
      elevation: wp(10),
      marginBottom: wp(40),
    },
  });

  const getStatusColor = (status) => {
    if (status == "paid") {
      return colors.green;
    }
    if (status == "due") {
      return colors.error;
    }
    if (status == "pending") {
      return colors.darkOrange;
    }
  };

  const statusColor = getStatusColor(loanData.status);

  return (
    <View style={styles.loanCard}>
      <TouchableOpacity onPress={toggleAccordion}>
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
              source={maleAvatar}
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
                <View style={{ marginLeft: wp(8) }}>
                  {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </View>
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
            <CustomText.BodyLarge color={statusColor}>
              {loanData?.status}
            </CustomText.BodyLarge>
          </View>
        </View>
        {isExpanded && (
          <View
            style={{
              padding: 6,
              paddingHorizontal: wp(53),
            }}
          >
            <CustomText.BodySmall>
              Gave out on{" "}
              <CustomText.BodySmall color={colors.black}>
                {loanData?.loanDate}
              </CustomText.BodySmall>
            </CustomText.BodySmall>
            <CustomText.BodySmall marginTop={wp(10)}>
              Interest rate is{" "}
              <CustomText.BodySmall color={colors.black}>
                {loanData?.interestRate}%
              </CustomText.BodySmall>
            </CustomText.BodySmall>
            <CustomText.BodySmall marginTop={wp(6)}>
              After due date{" "}
              <CustomText.BodySmall color={colors.black}>
                {loanData?.interestRateAfterDeadline}%
              </CustomText.BodySmall>
            </CustomText.BodySmall>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LoanCard;
