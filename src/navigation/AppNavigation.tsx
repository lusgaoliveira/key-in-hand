import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login";
import ResetPasswordScreen from "../screens/resetPassword";
import { RoutesParams } from './routeParams';
import RegisterScreen from "../screens/register";


const Stack = createNativeStackNavigator<RoutesParams>();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Login" component={LoginScreen} />
                <Stack.Screen name = "ResetPassword" component={ResetPasswordScreen}/>
                <Stack.Screen name = "Register" component={RegisterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}