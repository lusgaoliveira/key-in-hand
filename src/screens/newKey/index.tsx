import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from '../../navigation/routeParams';
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/inputs/input";
import { styles } from "./styles";
import Button from "../../components/buttons/button";
import { useEffect, useRef, useState } from "react";
import { KeyStorage } from "../../utils/storages/KeyStorage";

type newTaskParamsList = NativeStackNavigationProp<RoutesParams, 'NewKey'>;

export default function NewKeyScreen() {
    const navigate = useNavigation<newTaskParamsList>();

    const [title, setTitle] = useState(""); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");

    const titleRef = useRef<TextInput>(null);
    const usernameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
    }, []);

    const handleSave = async () => {
        if (title !== "" || username !== "" || password !== "" || confirmPassword !== "") {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            const uniqueKey = Math.random().toString(36);

            const newKey = {
                id: uniqueKey,
                title,
                username,
                password,
                createdAt: new Date().toISOString(),
            };

            try {
                await KeyStorage.saveKey(uniqueKey, newKey); 
                alert("Key saved successfully!");

                setTitle("");
                setUsername("");
                setPassword("");
                setConfirmPassword("");

                navigate.navigate("Home");
            } catch (error) {
                console.error("Error saving key:", error);
                alert("Failed to save the key. Please try again.");
            }
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 2} 
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
                                placeholder="title" 
                                value={title}
                                onChangeText={setTitle}
                                returnKeyType="next"
                                ref={titleRef}
                                onSubmitEditing={() => usernameRef.current?.focus()}
                            />
                            <Input 
                                placeholder="e-mail/username" 
                                value={username}
                                onChangeText={setUsername}
                                returnKeyType="next"
                                ref={usernameRef}
                                onSubmitEditing={() => passwordRef.current?.focus()}
                            />
                            <Input
                                placeholder="password" 
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                returnKeyType="next"
                                ref={passwordRef}
                                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                            />
                            <Input
                                placeholder="conf password" 
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry
                                returnKeyType="done"
                                ref={confirmPasswordRef}
                                onSubmitEditing={() => navigate.navigate("Home")}
                            />
                        </View>
                        <View style={styles.optionalsContainer}>
                            <Button 
                                style={styles.button} 
                                className="stepBack" 
                                title="Cancel" 
                                onPress={() => navigate.navigate("Home")} 
                            />
                            <Button 
                                style={styles.button} 
                                className="moveForward" 
                                title="Save" 
                                onPress={handleSave} 
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
