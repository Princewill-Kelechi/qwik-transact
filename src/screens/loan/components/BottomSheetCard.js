import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomText } from "../../../components";
import { maleAvatar } from "../../../theme/images";

const loanData = {
  name: "Princewill Kelechi",
  dueDate: "Sep 29, 2023",
  loanDate: "07/01/2020",
  amount: "₦ 26,600",
  status: "due",
  interestRate: 5,
  interestRateAfterDeadline: 6,
};

export default function BottomSheetCard() {
  return (
    <View>
      <View style={StyleSheet.moneyHeader}>
        <CustomText.BodyLarge>{loanData.amount}</CustomText.BodyLarge>
        <CustomText.BodySmall>Loan requested</CustomText.BodySmall>
      </View>
      <View>
        <View>
          <Image source={maleAvatar} />
        </View>
      </View>
    </View>
  );
}
