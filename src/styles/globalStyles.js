import { StyleSheet } from "react-native";
import { hp, wp } from "../utils/responsive-dimension";
import { colors } from "../theme/colors";

export default globalStyles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.white,
  },
  uicontainer: {
    width: "100%",
    height: "100%",
    marginTop: hp(50),
    paddingHorizontal: wp(20),
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
});
