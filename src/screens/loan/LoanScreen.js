import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CustomText, Input, Button } from "../../components";
import globalStyles from "../../styles/globalStyles";
import { wp, hp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { ArrowBackIcon, SearchIcon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import FilterIcon from "../../assets/icons/FilterIcon";

export default function LoanScreen() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    main: {},
    headerText: {
      marginTop: wp(50),
    },
    inputContainer: {
      marginTop: wp(70),
    },
    filterContainer: {
      width: wp(40),
      height: wp(40),
      borderRadius: wp(100),
      padding: wp(8),
      backgroundColor: "hsla(0, 0%, 97%, 1)",
    },
  });

  return (
    <SafeAreaView style={[globalStyles.main]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.uicontainer]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: wp(30),
          }}
        >
          <Input
            leftElement={
              <SearchIcon
                customStyles={{ paddingLeft: wp(15), paddingRight: wp(5) }}
              />
            }
            inputStyles={{
              backgroundColor: "hsla(0, 0%, 97%, 1)",
              borderRadius: wp(100),
              alignItems: "center",
              justifyContent: "center",
              borderWidth: wp(0),
            }}
            width={wp(323)}
            textInputStyle={{ marginLeft: wp(5) }}
            placeholderTextColor={colors.gray3}
            placeholder="search user, loan or data"
            paddingVertical={wp(5)}
          />
          <View style={styles.filterContainer}>
            <FilterIcon />
          </View>
        </View>
        <Button marginTop={wp(250)} title="Create Loan" />
      </ScrollView>
    </SafeAreaView>
  );
}
