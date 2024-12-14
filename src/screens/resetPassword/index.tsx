import { 
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/buttons/button";
import { Formik } from "formik";
import ResetSchema from "../../utils/validators/reset";
import { useAuth } from "../../contexts/AuthContext";

type resetPasswordParamsList = NativeStackNavigationProp<RoutesParams, "ResetPassword">;

export default function ResetPasswordScreen() {
    const usernameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const { forgotPassword } = useAuth();
    const navigation = useNavigation<resetPasswordParamsList>();

    const handleReset = async(values : {username : string, email : string}) => {
        try {
            const resetRequest = {username : values.username , email : values.email};
            await forgotPassword(resetRequest);
            navigation.navigate('Login')
        } catch (error) {
            console.error('Error on reset password:', error);
        }
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} bounces={false} keyboardShouldPersistTaps="handled">
                    <View style={styles.container}>
                        <View style={styles.imgContainer}>
                            <Image source={require("../../assets/icon.png")} />
                            <Image source={require("../../assets/Title.png")} />
                        </View>
                        <Formik
                            initialValues={{ username: "", email: "" }}
                            validationSchema={ResetSchema}
                            onSubmit={handleReset}
                        >
                            {({ handleChange, handleBlur, values, errors, touched }) => (
                                <>
                                    <View style={styles.inputsContainer}>
                                        <Input
                                            placeholder="username"
                                            value={values.username}
                                            onChangeText={handleChange("username")}
                                            onBlur={handleBlur("username")}
                                            returnKeyType="next"
                                            ref={usernameRef}
                                            onSubmitEditing={() => emailRef.current?.focus()}
                                        />
                                        {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

                                        <Input
                                            placeholder="email"
                                            value={values.email}
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            returnKeyType="done"
                                            ref={emailRef}
                                        />
                                        {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                                        <View style={styles.optionalsContainer}>
                                            <Button
                                                title="Confirm"
                                                className="moveForward"
                                                style={styles.button}
                                                onPress={handleReset as any}
                                            />
                                            <Button
                                                title="Cancel"
                                                className="stepBack"
                                                style={styles.button}
                                                onPress={() => navigation.navigate("Login")}
                                            />
                                        </View>
                                    </View>
                                </>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
