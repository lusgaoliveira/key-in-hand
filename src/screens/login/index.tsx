import { 
    Image, 
    KeyboardAvoidingView, 
    Platform, 
    Text, 
    TextInput, 
    View } 
from "react-native";
import Input from "../../components/inputs/input";
import { styles } from "./styles";
import TextButton from "../../components/buttons/textButton";
import Button from "../../components/buttons/button";
import { useState, useRef } from "react";
import Checkbox from 'expo-checkbox';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import { useNavigation } from "@react-navigation/native";


type loginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

export default function LoginScreen() {
    const [isChecked, setChecked] = useState(false);
    const passwordRef = useRef<TextInput>(null);

    const navigation = useNavigation<loginParamsList>();

    return (
        <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            
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
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current?.focus()}
                    />
                    <Input
                        placeholder='password'
                        secureTextEntry
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
                        onPress={() => {
                            navigation.navigate("Home");
                        }}
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
        </KeyboardAvoidingView>
    )
}
