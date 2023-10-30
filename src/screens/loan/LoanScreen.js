import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { CustomText, Input, Button, CustomModal } from "../../components";
import globalStyles from "../../styles/globalStyles";
import { wp, hp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { ArrowBackIcon, CancelIcon, SearchIcon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import FilterIcon from "../../assets/icons/FilterIcon";
import LoanCard from "./components/LoanCard";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import { maleAvatar, maleAvatar2 } from "../../theme/images";
import { loanDataArray } from "../../utils/loanData";
import LoanRequestCard from "./components/LoanRequestCard";

export default function LoanScreen() {
  const navigation = useNavigation();
  const [loanState, setLoanState] = useState("Loan gave out");

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [tempLoan, setTempLoan] = useState();

  function BottomSheetCard() {
    return (
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: wp(40),
          }}
        >
          <CustomText.BodyLarge
            color={colors.black}
            fontSize={wp(20)}
            fontFamily="Fellix-Bold"
          >
            {tempLoan?.amount}
          </CustomText.BodyLarge>
          <CustomText.BodySmall>Loan requested</CustomText.BodySmall>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: wp(1),
            borderColor: colors.gray4,
            padding: wp(10),
            borderRadius: wp(35),
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={maleAvatar2} />
            <View style={{ marginLeft: wp(20) }}>
              <CustomText.BodyLarge color={colors.black}>
                {tempLoan?.name}
              </CustomText.BodyLarge>
              <CustomText.BodyLarge>1123456</CustomText.BodyLarge>
            </View>
          </View>
          <CustomText.BodyLarge color={colors.primary}>
            Check Profile
          </CustomText.BodyLarge>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: wp(20),
            }}
          >
            <CustomText.BodyLarge>Return date</CustomText.BodyLarge>
            <CustomText.BodyLarge>{tempLoan?.dueDate}</CustomText.BodyLarge>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: wp(20),
            }}
          >
            <CustomText.BodyLarge>Negotiated Interests</CustomText.BodyLarge>
            <CustomText.BodyLarge>
              {tempLoan?.interestRate}%
            </CustomText.BodyLarge>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: wp(20),
            }}
          >
            <CustomText.BodyLarge>Date sent</CustomText.BodyLarge>
            <CustomText.BodyLarge>{tempLoan?.loanDate}</CustomText.BodyLarge>
          </View>
        </View>
        <Button title="Accept request" marginTop={wp(40)} />
        <Button
          title="Reject request"
          marginTop={wp(10)}
          backgroundColor={colors.white}
          textColor={colors.error}
        />
      </View>
    );
  }

  const showLoanRequest = (loan) => {
    setTempLoan(loan);
    setIsSheetOpen(true);
  };

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
    loanContainer: {
      marginTop: wp(30),
    },
    loanHeader: {
      flexDirection: "row",
      marginBottom: wp(20),
    },
  });

  const LoanHeader = ({ title = "Loan Title" }) => {
    const active = loanState === title;
    const headStyle = StyleSheet.create({
      main: {
        borderBottomWidth: wp(2),
        borderBottomColor: active ? colors.primary : colors.gray4,
        padding: wp(12),
        justifyContent: "center",
        alignItems: "center",
      },
    });
    return (
      <TouchableOpacity
        onPress={() => setLoanState(title)}
        style={headStyle.main}
      >
        <CustomText.BodyLarge
          fontSize={wp(14)}
          color={active ? colors.black : colors.gray4}
        >
          {title}
        </CustomText.BodyLarge>
      </TouchableOpacity>
    );
  };

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
        <View style={styles.loanContainer}>
          <View style={styles.loanHeader}>
            <LoanHeader title="Loan gave out" />
            <LoanHeader title="Loan requests" />
            <LoanHeader title="Loan collected" />
          </View>
          <View style={styles.loanBody}>
            {loanState == "Loan gave out" && (
              <FlatList
                data={loanDataArray}
                renderItem={({ item }) => <LoanCard loanData={item} />}
                keyExtractor={(item) => item.id}
              />
            )}
            {loanState == "Loan requests" && (
              <FlatList
                data={loanDataArray}
                renderItem={({ item }) => (
                  <LoanRequestCard
                    onPress={() => showLoanRequest(item)}
                    loanData={item}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            )}
            {loanState == "Loan collected" && (
              <FlatList
                data={loanDataArray}
                renderItem={({ item }) => <LoanCard loanData={item} />}
                keyExtractor={(item) => item.id}
              />
            )}
          </View>
        </View>

        <Button
          customStyles={styles.btn}
          marginTop={wp(250)}
          title="Create Loan"
          onPress={() => setModalOpen(!modalOpen)}
        />
      </ScrollView>
      <CustomBottomSheet
        isVisible={isSheetOpen}
        title="Loan Details"
        onClose={() => setIsSheetOpen(!isSheetOpen)}
        content={<BottomSheetCard />}
      />
      <CustomModal
        isVisible={modalOpen}
        onClose={() => setModalOpen(!modalOpen)}
      >
        <TouchableOpacity
          onPress={() => setModalOpen(!modalOpen)}
          style={{
            alignItems: "flex-end",
            marginBottom: wp(20),
          }}
        >
          <CancelIcon />
        </TouchableOpacity>
        <View
          style={{
            alignSelf: "center",
          }}
        ></View>
        <CustomText.BodyLarge color={colors.black} textAlign="center">
          Are you sure you wan to reject this request? the loan request will be
          removed from your request list
        </CustomText.BodyLarge>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: wp(30),
            borderTopWidth: wp(1),
            borderTopColor: colors.gray4,
            paddingTop: wp(20),
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText.BodyLarge color={colors.gray3}>
              Cancel
            </CustomText.BodyLarge>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText.BodyLarge color={colors.error}>
              Reject
            </CustomText.BodyLarge>
          </TouchableOpacity>
        </View>
      </CustomModal>
    </SafeAreaView>
  );
}
