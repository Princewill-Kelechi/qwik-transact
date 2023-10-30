import { DropdownAlertType } from "react-native-dropdownalert";
import { Platform, StatusBar, StatusBarStyle } from "react-native";
import { colors } from "../theme/colors";

export class AlertHelper {
  static dropDown;
  static onClose;
  static statusBarStyle = "dark-content";

  static setStatusBarStyle(style) {
    this.statusBarStyle = style;
  }

  static setDropDown(dropDown) {
    this.dropDown = dropDown;
  }

  static show(type, title = "", message) {
    if (this.dropDown) {
      this.dropDown.alertWithType(type, title, message);
    }
  }

  static setOnClose(onClose) {
    this.onClose = onClose;
  }

  static invokeOnClose() {
    setTimeout(() => {
      StatusBar.setBarStyle(this.statusBarStyle, true);
      if (Platform.OS === "android") {
        StatusBar.setBackgroundColor(colors.lighterGrey, true);
      }
      this.setStatusBarStyle("dark-content");
    }, 100);
    if (typeof this.onClose === "function") {
      this.onClose();
    }
  }
}
