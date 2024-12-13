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
import { Formik } from "formik";
import LoginSchema from "../../utils/validators/login";

type loginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

export default function LoginScreen() {
    

    const usernameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const { login, isAuthenticated, keepConnected } = useAuth();
    const navigation = useNavigation<loginParamsList>();

    useEffect(() => {
        if (isAuthenticated && keepConnected) {
            navigation.navigate('Home');
        }
    }, [isAuthenticated, keepConnected, navigation]);

    const handleLogin = async (value : { username : string, password : string, keepConnected: boolean }) => {
        try {
            await login(value);
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Error when logging in');
        }
    };
    

    

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
                        <Formik
                            initialValues={{ username: '', password: '', keepConnected: false }}
                            validationSchema={LoginSchema}
                            onSubmit={(values) => handleLogin(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                                <>
                                    <View style={styles.inputsContainer}>
                                        <Input
                                            placeholder="username"
                                            value={values.username} 
                                            onChangeText={handleChange('username')} 
                                            onBlur={handleBlur('username')} 
                                            returnKeyType="next"
                                            ref={usernameRef}
                                            onSubmitEditing={() => passwordRef.current?.focus()}
                                        />
                                        {touched.username && errors.username && (
                                            <Text style={styles.errorText}>{errors.username}</Text> 
                                        )}

                                        <Input
                                            placeholder="password"
                                            secureTextEntry
                                            value={values.password} 
                                            onChangeText={handleChange('password')} 
                                            onBlur={handleBlur('password')} 
                                            ref={passwordRef}
                                            returnKeyType="done"
                                        />
                                        {touched.password && errors.password && (
                                            <Text style={styles.errorText}>{errors.password}</Text> 
                                        )}
                                    </View>

                                    <View style={styles.keepLoginContainer}>
                                        <View style={styles.keepLoginContent}>
                                        <Checkbox
                                            style={styles.checkbox}
                                            value={values.keepConnected} 
                                            onValueChange={(checked) => setFieldValue('keepConnected', checked)}
                                        />
                                            <Text style={styles.keepText}>Keep me logged in</Text>
                                        </View>
                                    </View>

                                    <View style={styles.accountExistsContainter}>
                                        <Button
                                            title="Login"
                                            className="moveForward"
                                            style={styles.button}
                                            onPress={handleSubmit as any} 
                                        />
                                        <TextButton
                                            title="Forgot password"
                                            style={styles.textButton}
                                            onPress={() => navigation.navigate('ResetPassword')}
                                        />
                                    </View>
                                </>
                            )}
                        </Formik>

                        
                        
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
