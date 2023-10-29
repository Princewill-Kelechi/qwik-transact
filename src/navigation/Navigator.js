import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import TabNavigator from "./AppNavigator";

const BaseApp = () => {
  const loggedIn = false;
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default BaseApp;
