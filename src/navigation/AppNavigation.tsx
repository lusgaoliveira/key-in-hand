import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RoutesParams } from './routeParams';

import LoginScreen from "../screens/login";
import ResetPasswordScreen from "../screens/resetPassword";
import RegisterScreen from "../screens/register";
import HomeScreen from "../screens/home";
import EditKey from "../screens/editKey";


const Stack = createNativeStackNavigator<RoutesParams>();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Login" component={LoginScreen} />
                <Stack.Screen name = "ResetPassword" component={ResetPasswordScreen}/>
                <Stack.Screen name = "Register" component={RegisterScreen}/>
                <Stack.Screen name = "Home" component={HomeScreen}/>
                <Stack.Screen name = "EditKey" component={EditKey}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}