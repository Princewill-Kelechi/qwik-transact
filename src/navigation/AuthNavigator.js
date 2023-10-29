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

const Stack = createStackNavigator();

const AuthNavigator = () => {
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

export default AuthNavigator;
