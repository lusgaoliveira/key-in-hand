import { 
    Image, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    TextInput, 
    View, 
    Alert 
} from "react-native";
import Input from "../../components/inputs/input";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/buttons/button";
import { SafeAreaView } from "react-native-safe-area-context";

type registerParamsList = NativeStackNavigationProp<RoutesParams, "Register">;

export default function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const usernameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);
    const fullNameRef = useRef<TextInput>(null);

    const navigation = useNavigation<registerParamsList>();
    const { register } = useAuth();

    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.focus();
        }
    }, []);

    const handleRegister = async () => {
        if (!username || !email || !password || !confirmPassword || !fullName) {
            Alert.alert('All fields are mandatory');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match');
            return;
        }

        try {
            await register({ username, password, email, fullName });
            navigation.navigate('Login');
        } catch {
            Alert.alert('Unable to register')
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

                        <View style={styles.inputsContainer}>
                            <Input
                                placeholder="username"
                                value={username}
                                onChangeText={setUsername}
                                returnKeyType="next"
                                ref={usernameRef}
                                onSubmitEditing={() => emailRef.current?.focus()}
                            />

                            <Input
                                placeholder="email"
                                value={email}
                                onChangeText={setEmail}
                                returnKeyType="next"
                                ref={emailRef}
                                onSubmitEditing={() => passwordRef.current?.focus()}
                            />

                            <Input
                                placeholder="password"
                                value={password}
                                onChangeText={setPassword}
                                returnKeyType="next"
                                ref={passwordRef}
                                secureTextEntry
                                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                            />

                            <Input
                                placeholder="conf password"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                returnKeyType="next"
                                ref={confirmPasswordRef}
                                secureTextEntry
                            />

                            <Input
                                placeholder="full name"
                                value={fullName}
                                onChangeText={setFullName}
                                ref={fullNameRef}
                                returnKeyType="done"
                            />
                        </View>

                        <View style={styles.optionalsContainer}>
                            <Button
                                title="Registrar"
                                className="moveForward"
                                style={styles.button}
                                onPress={handleRegister}
                            />
                            <Button
                                title="Cancelar"
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
