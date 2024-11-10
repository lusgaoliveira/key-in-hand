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
import Input from "../../components/input";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/buttons/button";

type resetPasswordParamsList = NativeStackNavigationProp<RoutesParams, "ResetPassword">;

export default function ResetPasswordScreen() {
    const passwordRef = useRef<TextInput>(null);

    const navigation = useNavigation<resetPasswordParamsList>();

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

                        <View style={styles.inputsContainer}>
                            <Input
                                placeholder="username"
                                returnKeyType="next"
                                onSubmitEditing={() => passwordRef.current?.focus()}
                            />
                            <Input
                                placeholder="password"
                                secureTextEntry
                                ref={passwordRef}
                                returnKeyType="done"
                            />
                            <Input
                                placeholder="new password"
                                secureTextEntry
                                returnKeyType="done"
                            />

                        </View>

                        <View style={styles.optionalsContainer}>
                            <Button
                                title="Register"
                                className="moveForward"
                                style={styles.button}
                                onPress={() => navigation.navigate('Login')}
                            />
                            <Button
                                title="Cancel"
                                className="stepBack"
                                style={styles.button}
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
