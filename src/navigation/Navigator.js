import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import TabNavigator from "./AppNavigator";
import { useSelector } from "react-redux";

const BaseApp = () => {
  const loggedIn = false;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default BaseApp;
