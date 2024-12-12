import { 
    Alert,
    Image, 
    KeyboardAvoidingView, 
    Platform, 
    SafeAreaView, 
    ScrollView, 
    Text, 
    TextInput, 
    View } 
from "react-native";
import Input from "../../components/inputs/input";
import { styles } from "./styles";
import TextButton from "../../components/buttons/textButton";
import Button from "../../components/buttons/button";
import { useState, useRef, useEffect } from "react";
import Checkbox from 'expo-checkbox';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";

type loginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);

    const usernameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const { login, isAuthenticated } = useAuth();
    const navigation = useNavigation<loginParamsList>();


    const handleLogin = async () => {
        try {
            await login({ username, password, keepConnected: isChecked });
            console.log('Login successful, checking authentication...');
            if (isAuthenticated) {
                navigation.navigate('Home');
            } else {
                console.log('User not authenticated.');
            }
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Error when logging in');
        }
    };
    

    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.focus();
        }
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 10} 
                
            >
                <ScrollView 
                    contentContainerStyle={styles.scrollContent} 
                    bounces={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>

                        <View style={styles.imgContainer}>
                            <Image
                                source={require("../../assets/icon.png")}
                            />
                            <Image
                                source={require("../../assets/Title.png")}
                            />
                        </View>
                        <View style={styles.inputsContainer}>
                            <Input
                                placeholder='username'
                                value={username}
                                onChangeText={setUsername}
                                returnKeyType="next"
                                ref={usernameRef}
                                onSubmitEditing={() => passwordRef.current?.focus()}
                            />
                            <Input
                                placeholder='password'
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                                ref={passwordRef}
                                returnKeyType="done"
                            />
                        </View>
                        <View style={styles.keepLoginContainer}>
                            <View style={styles.keepLoginContent}>
                                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                                <Text style={styles.keepText}>Keep me logged in</Text>
                            </View>
                            
                        </View>
                        
                        <View style={styles.accountExistsContainter}>
                            <Button
                                title="Login"
                                className="moveForward"
                                style={styles.button}
                                onPress={handleLogin}
                            />

                            <TextButton
                                title="Forgot password"
                                style={styles.textButton}
                                onPress={() => {
                                    navigation.navigate("ResetPassword");
                                }}
                            />
                        </View>
                        
                        <View style={styles.accountCreateContainer}>
                            <Text style={styles.textAccountCreate}>
                                Don´t have an account?
                            </Text>
                            <TextButton
                                title="Register"
                                style={[styles.textButton, styles.cont]}
                                onPress={() => {
                                    navigation.navigate("Register");
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
