import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-native-paper";
import { RoutesParams } from './routeParams';

import LoginScreen from "../screens/login";
import ResetPasswordScreen from "../screens/resetPassword";
import RegisterScreen from "../screens/register";
import HomeScreen from "../screens/home";
import EditKey from "../screens/editKey";
import NewKeyScreen from "../screens/newKey";
import { useAuth } from "../contexts/AuthContext";
import EditProfileScreen from "../screens/editProfile";

const Stack = createNativeStackNavigator<RoutesParams>();

export default function AppNavigation() {

    const { isAuthenticated, isFirstAccess } = useAuth();

    return (
        <Provider>
            <NavigationContainer> 
                {
                    isAuthenticated ?
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name = "Home" component={HomeScreen}/>
                            <Stack.Screen name = "EditKey" component={EditKey}/>
                            <Stack.Screen name = "NewKey" component={NewKeyScreen}/>
                            <Stack.Screen name = 'EditProfile' component={EditProfileScreen}/>
                        </Stack.Navigator>
                    :
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name = "Login" component={LoginScreen} />
                        <Stack.Screen name = "ResetPassword" component={ResetPasswordScreen}/>
                        <Stack.Screen name = "Register" component={RegisterScreen}/>
                    </Stack.Navigator>
                }
            </NavigationContainer>
        </Provider>
    )
}