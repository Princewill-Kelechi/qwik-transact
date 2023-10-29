import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { CustomText, Input, Button } from "../../../components";
import globalStyles from "../../../styles/globalStyles";
import { wp, hp } from "../../../utils/responsive-dimension";
import { colors } from "../../../theme/colors";
import { mailImage } from "../../../theme/images";
import { ArrowBackIcon } from "../../../assets/icons";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

export default function VerifyLostEmail() {
  const [value, setValue] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setCountdown(60);
  };

  const handleCountdown = () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    } else {
      setIsRunning(false);
      console.log("Countdown reached zero. Action triggered.");
    }
  };

  useEffect(() => {
    let countdownInterval;

    if (isRunning) {
      countdownInterval = setInterval(handleCountdown, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isRunning, countdown]);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    startCountdown();
  }, []);

  const styles = StyleSheet.create({
    main: {},
    headerText: {
      marginTop: wp(50),
    },
    root: { flex: 1, padding: 20 },
    title: { textAlign: "center", fontSize: 30 },
    codeFieldRoot: { marginTop: 50 },
    cell: {
      width: wp(63),
      height: wp(65),
      lineHeight: 58,
      fontSize: 24,
      borderWidth: 1,
      borderColor: colors.gray4,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: wp(5),
      backgroundColor: "rgba(249, 249, 249, 1)",
    },
    pin: {
      flex: 1,
      lineHeight: wp(65),
      fontSize: wp(30),
      fontFamily: "Fellix-Regular",
      textAlign: "center",
    },
    cellFocused: {
      borderColor: colors.primary,
    },
  });

  return (
    <SafeAreaView style={[globalStyles.main]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.uicontainer]}
      >
        <ArrowBackIcon />
        <View style={styles.headerText}>
          <CustomText.BodyLarge
            color={colors.black}
            fontFamily="Fellix-Bold"
            fontSize={wp(24)}
          >
            Forgot Password
          </CustomText.BodyLarge>
          <CustomText.BodyLarge marginTop={wp(10)} width={wp(300)}>
            Enter the pin sent to{" "}
            {
              <CustomText.BodyLarge
                fontFamily="Fellix-SemiBold"
                color={colors.gray1}
              >
                princewillkelechi02020@gmail.com
              </CustomText.BodyLarge>
            }
          </CustomText.BodyLarge>
        </View>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              style={[styles.cell, isFocused && styles.cellFocused]}
              key={index}
              onLayout={getCellOnLayoutHandler(index)}
            >
              <Text style={styles.pin}>
                {isFocused ? <Cursor /> : symbol ? "*" : ""}
              </Text>
            </View>
          )}
        />
        <View style={{ marginTop: wp(30), alignSelf: "center" }}>
          <CustomText.BodyLarge>
            Didn't get the code?{" "}
            {
              <CustomText.BodyLarge color={colors.primary}>
                Resend
              </CustomText.BodyLarge>
            }
          </CustomText.BodyLarge>
          <CustomText.BodyLarge
            marginTop={wp(10)}
            alignSelf="center"
            color={colors.primary}
          >
            {countdown} secs
          </CustomText.BodyLarge>
        </View>
        <Button marginTop={wp(350)} title="Proceed" />
      </ScrollView>
    </SafeAreaView>
  );
}
