import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CustomText, Input, Button } from "../../components";
import globalStyles from "../../styles/globalStyles";
import { wp, hp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../../utils/constants";

export default function CreateLoan() {
  const navigation = useNavigation();

  const [maxLoanAmount, setMaxLoanamount] = useState("");
  const [statePreference, setStatePreference] = useState("");
  const [totalFunds, setTotalFunds] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [allowableLoanDuration, setAllowedduration] = useState("");
  const [loanConditions, setLoanConditions] = useState("");
  const [loading, setLoading] = useState(false);

  const loanData = {
    maxLoanAmount: maxLoanAmount,
    totalFunds: totalFunds,
    interestRate: interestRate,
    statePreference: statePreference,
    allowableLoanDuration: allowableLoanDuration,
    // repaymentPlan: any,
    loanConditions: loanConditions,
    // requiredDocuments: any,
  };

  const createLoan = async () => {
    setLoading(true);
    fetch(BASE_URL + "lend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loanData),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          setLoading(false);
          return response.json();
        } else {
          throw new Error("Create Loan failed");
        }
      })
      .then((data) => {
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
      marginTop: hp(60),
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
              Create Loan on
            </CustomText.Header>
            <CustomText.Header fontSize={wp(24)} color={colors.primary}>
              {" "}
              QwikTransact
            </CustomText.Header>
          </View>
          <CustomText.BodyLarge marginTop={wp(10)}>
            Be in charge, set your rates
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
              Max loan amount
            </CustomText.BodySmall>
            <Input
              placeholder="Enter max loan amount"
              onChangeText={(text) => setMaxLoanamount(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomText.BodySmall
              fontFamily="Fellix-Regular"
              marginBottom={wp(8)}
              fontSize={wp(18)}
              color={colors.gray2}
            >
              Total funds
            </CustomText.BodySmall>
            <Input
              placeholder="Enter Total Funds"
              onChangeText={(text) => setTotalFunds(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomText.BodySmall
              fontFamily="Fellix-Regular"
              marginBottom={wp(8)}
              fontSize={wp(18)}
              color={colors.gray2}
            >
              Interest Rate
            </CustomText.BodySmall>
            <Input
              placeholder="Enter your desired interest rate"
              onChangeText={(text) => setInterestRate(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomText.BodySmall
              fontFamily="Fellix-Regular"
              marginBottom={wp(8)}
              fontSize={wp(18)}
              color={colors.gray2}
            >
              State Preference
            </CustomText.BodySmall>
            <Input
              placeholder="Enter Loan Preference"
              onChangeText={(text) => setStatePreference(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomText.BodySmall
              fontFamily="Fellix-Regular"
              marginBottom={wp(8)}
              fontSize={wp(18)}
              color={colors.gray2}
            >
              allowableLoanDuration
            </CustomText.BodySmall>
            <Input
              placeholder="Enter Allow Loan Duration"
              onChangeText={(text) => setAllowedduration(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <CustomText.BodySmall
              fontFamily="Fellix-Regular"
              marginBottom={wp(8)}
              fontSize={wp(18)}
              color={colors.gray2}
            >
              Loan Conditions
            </CustomText.BodySmall>
            <Input
              placeholder="Set Loan Conditions"
              onChangeText={(text) => setLoanConditions(text)}
            />
          </View>
          <Button
            marginTop={wp(50)}
            loading={loading}
            onPress={() => createLoan()}
            title={"Create Loan"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
