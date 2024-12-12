import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RoutesParams } from '../../navigation/routeParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Input from "../../components/inputs/input";
import { styles } from "./styles";
import Button from "../../components/buttons/button";
import { useEffect, useRef, useState } from "react";
import { KeyStorage } from "../../storages/KeyStorage";

type editKeyParamsList = NativeStackNavigationProp<RoutesParams, 'EditKey'>;

export default function EditKeyScreen({ route }: { route: { params: RoutesParams['EditKey'] } }) {
    const navigate = useNavigation<editKeyParamsList>();
    const data = route?.params || {};
    
    const [title, setTitle] = useState(data.title);
    const [username, setUsername] = useState(data.username);
    const [password, setPassword] = useState(data.password);
    const [confirmPassword, setConfirmPassword] = useState("");

    const titleRef = useRef<TextInput>(null);
    const usernameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);

    const [isEditable, setIsEditable] = useState(false);



    useEffect(() => {
        if (isEditable && titleRef.current) {
          titleRef.current.focus(); 
          titleRef.current.blur();  
        }
    }, [isEditable]);

    const buttonPrimaryTitle = isEditable ? 'Save' : 'Edit';
    const buttonWarningTitle = isEditable ? 'Cancel' : 'Back';

    const handleSubmit = () => {
        if (isEditable) {
            setIsEditable(false);
        } else {
            setIsEditable(true);
        }
    };

    const handleSave = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const editKeyToSave = {
            id: data.id,
            title,
            username,
            password,
            createdAt: data.createdAt,
        };

        try {
            await KeyStorage.saveKey(data.id, editKeyToSave);
            alert("Key edited successfully");

            setTitle("");
            setUsername("");
            setPassword("");
            setConfirmPassword("");

            navigate.navigate("Home");  
        } catch (error) {
            console.error("Error saving key:", error);
            alert("Failed to edited the key. Please try again.");
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
                                onChangeText={setTitle}
                                value={title}
                                editable={isEditable}
                                returnKeyType="next"
                                ref={titleRef}
                                onSubmitEditing={() => usernameRef.current?.focus()}
                            />
                            <Input 
                                placeholder="e-mail/username" 
                                onChangeText={setUsername}
                                value={username}
                                editable={isEditable}
                                returnKeyType="next"
                                ref={usernameRef}
                                onSubmitEditing={() => passwordRef.current?.focus()}
                            />
                            <Input
                                placeholder="password"                                 
                                onChangeText={setPassword}
                                value={password}
                                editable={isEditable}
                                secureTextEntry
                                returnKeyType="next"
                                ref={passwordRef}
                                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                            />
                            <Input
                                placeholder="conf password" 
                                onChangeText={setConfirmPassword}
                                value={confirmPassword}
                                editable={isEditable}
                                secureTextEntry
                                returnKeyType="done"
                                ref={confirmPasswordRef}
                                onSubmitEditing={handleSave}
                            />
                        </View>
                        <View style={styles.optionalsContainer}>
                            <Button 
                                style={styles.button} 
                                className="stepBack" 
                                title={buttonWarningTitle}
                                onPress={buttonWarningTitle === 'Cancel' ? handleSubmit : () => navigate.goBack()}  
                            />
                            <Button 
                                style={styles.button} 
                                className="moveForward" 
                                title={buttonPrimaryTitle}
                                onPress={buttonPrimaryTitle === 'Save' ? handleSave : handleSubmit}  
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
