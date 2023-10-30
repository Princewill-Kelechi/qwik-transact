import {
  ResetPassword,
  SignIn,
  SignUp,
  VerifyEmail,
  VerifyLandingScreen,
  VerifyLostEmail,
  EnterEmail,
  HomeScreen,
  ProfileScreen,
  LoanScreen,
} from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { wp } from "../utils/responsive-dimension";
import CustomBottomTab from "./components/CustomBottomTab";
import { Platform } from "react-native";
import AuthNavigator from "./AuthNavigator";
import ILocateScreen from "../screens/i-locate/ILocateScreen";
import CreateLoan from "../screens/loan/CreateLoanScreen";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen
        name="VerifyLandingScreen"
        component={VerifyLandingScreen}
      />
      <Stack.Screen name="VerifyLostEmail" component={VerifyLostEmail} />
      <Stack.Screen name="EnterEmail" component={EnterEmail} />
    </Stack.Navigator>
  );
};

const DummyNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen
        name="VerifyLandingScreen"
        component={VerifyLandingScreen}
      />
      <Stack.Screen name="VerifyLostEmail" component={VerifyLostEmail} />
      <Stack.Screen name="EnterEmail" component={EnterEmail} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateLoanScreen" component={CreateLoan} />
    </Stack.Navigator>
  );
};

const LoanNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoanScreen" component={LoanScreen} />
      <Stack.Screen name="CreateLoanScreen" component={CreateLoan} />
    </Stack.Navigator>
  );
};

const LocateNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="I-LocateScreen" component={ILocateScreen} />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <CustomBottomTab {...props} />}
      screenOptions={{ headerShown: false }}
      keyboardAvoidingView="behavior"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -64}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="i-Locate"
        component={LocateNavigator}
        options={{
          tabBarLabel: "i-Locate",
        }}
      />
      <BottomTab.Screen
        name="Loan"
        component={LoanNavigator}
        options={{
          tabBarLabel: "Loan",
        }}
      />
      <BottomTab.Screen
        name="More"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "More",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
