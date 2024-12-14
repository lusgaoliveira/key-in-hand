import { 
    Image, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    TextInput, 
    View, 
    Text,
    Alert 
} from "react-native";
import Input from "../../components/inputs/input";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/buttons/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import RegisterSchema from "../../utils/validators/register";


type registerParamsList = NativeStackNavigationProp<RoutesParams, "Register">;

export default function RegisterScreen() {

    const usernameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);
    const fullNameRef = useRef<TextInput>(null);

    const navigation = useNavigation<registerParamsList>();
    const { register, login } = useAuth();

    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.focus();
        }
    }, []);

    const handleRegister = async (values: {username: string, email: string, password: string, fullName: string}) => {
        try {
            
            const newUser = { username: values.username, email: values.email, 
                                password: values.password,  fullName: values.fullName
            };
            await register(newUser);
            Alert.alert('User successfully registered!');
            await login({ username: values.username, password: values.password, keepConnected: false });
        } catch (error) {
            console.error('Error on register:', error);
            Alert.alert('Unable to register!');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    bounces={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>
                        <View style={styles.imgContainer}>
                            <Image source={require("../../assets/icon.png")} />
                            <Image source={require("../../assets/Title.png")} />
                        </View>
                        <Formik
                            initialValues={{ username: '', email: '', password: '', confirmPassword: '', fullName: '' }}
                            validationSchema={RegisterSchema}
                            onSubmit={handleRegister}  
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => ( 
                                <>
                                    <View style={styles.inputsContainer}>
                                        <Input
                                            placeholder="username"
                                            value={values.username}
                                            onChangeText={handleChange('username')} 
                                            onBlur={handleBlur('username')} 
                                            returnKeyType="next"
                                            ref={usernameRef}
                                            onSubmitEditing={() => emailRef.current?.focus()}
                                        />
                                        {touched.username && errors.username && (
                                            <Text style={styles.errorText}>{errors.username}</Text> 
                                        )}

                                        <Input
                                            placeholder="email"
                                            value={values.email}
                                            onChangeText={handleChange('email')} 
                                            onBlur={handleBlur('email')} 
                                            returnKeyType="next"
                                            ref={emailRef}
                                            onSubmitEditing={() => passwordRef.current?.focus()}
                                        />
                                        {touched.email && errors.email && (
                                            <Text style={styles.errorText}>{errors.email}</Text> 
                                        )}

                                        <Input
                                            placeholder="password"
                                            value={values.password}
                                            onChangeText={handleChange('password')} 
                                            onBlur={handleBlur('password')} 
                                            returnKeyType="next"
                                            ref={passwordRef}
                                            secureTextEntry
                                            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                                        />
                                        {touched.password && errors.password && (
                                            <Text style={styles.errorText}>{errors.password}</Text> 
                                        )}

                                        <Input
                                            placeholder="conf password"
                                            value={values.confirmPassword}
                                            onChangeText={handleChange('confirmPassword')} 
                                            onBlur={handleBlur('confirmPassword')} 
                                            returnKeyType="next"
                                            ref={confirmPasswordRef}
                                            secureTextEntry
                                        />
                                        {touched.confirmPassword && errors.confirmPassword && (
                                            <Text style={styles.errorText}>{errors.confirmPassword}</Text> 
                                        )}

                                        <Input
                                            placeholder="full name"
                                            value={values.fullName}
                                            onChangeText={handleChange('fullName')} 
                                            onBlur={handleBlur('fullName')} 
                                            ref={fullNameRef}
                                            returnKeyType="done"
                                        />
                                        {touched.fullName && errors.fullName && (
                                            <Text style={styles.errorText}>{errors.fullName}</Text> 
                                        )}
                                    </View>

                                    <View style={styles.optionalsContainer}>
                                        <Button
                                            title="Register"
                                            className="moveForward"
                                            style={styles.button}
                                            onPress={handleSubmit as any}
                                        />
                                        <Button
                                            title="Cancel"
                                            className="stepBack"
                                            style={styles.button}
                                            onPress={() => navigation.navigate('Login')}
                                        />
                                    </View>
                                </>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
