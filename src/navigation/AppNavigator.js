import {
  ResetPassword,
  SignIn,
  SignUp,
  VerifyEmail,
  VerifyLandingScreen,
  VerifyLostEmail,
  EnterEmail,
} from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { wp } from "../utils/responsive-dimension";
import CustomBottomTab from "./components/CustomBottomTab";
import { Platform } from "react-native";
import AuthNavigator from "./AuthNavigator";

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

const ProfileNavigator = () => {
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

const AddCarNavigator = () => {
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
      <Stack.Screen name="EnterEmail" component={EnterEmail} />{" "}
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
        component={AppNavigator}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="i-Locate"
        component={DummyNavigator}
        options={{
          tabBarLabel: "i-Locate",
        }}
      />
      <BottomTab.Screen
        name="Card"
        component={DummyNavigator}
        options={{
          tabBarLabel: "Card",
        }}
      />
      <BottomTab.Screen
        name="More"
        component={DummyNavigator}
        options={{
          tabBarLabel: "More",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
