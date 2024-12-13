import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RoutesParams } from '../../navigation/routeParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Input from "../../components/inputs/input";
import { styles } from "./styles";
import Button from "../../components/buttons/button";
import { useEffect, useRef, useState } from "react";
import { KeyStorage } from "../../storages/KeyStorage";
import { useAuth } from "../../contexts/AuthContext";
import { UserStorage } from "../../storages/UserStorage";

type editProfileParamsList = NativeStackNavigationProp<RoutesParams, 'EditProfile'>;

export default function EditProfileScreen() {
    const navigate = useNavigation<editProfileParamsList>();
    const { user } = useAuth();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');

    const usernameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const fullNameRef = useRef<TextInput>(null);

    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const storedUser = await UserStorage.getUser(user.username);
                if (storedUser) {
                    setUsername(storedUser.username || '');
                    setEmail(storedUser.email || '');
                    setFullName(storedUser.fullName || '');
                }
            } catch (error) {
                console.error('Error on loading user', error);
            }
        };
    
        if (!isEditable) {
            getUser(); 
        }
    }, [user.username, isEditable]);

    const buttonPrimaryTitle = isEditable ? 'Save' : 'Edit';
    const buttonWarningTitle = isEditable ? 'Cancel' : 'Back';

    const handleSubmit = () => {
        setIsEditable((prev) => !prev);
    };

    const handleSave = async () => {
        
        const editUser = {
            username,
            email,
            fullName,
        };

        try {
            await UserStorage.saveUser(username, editUser);
            alert("User edited successfully");

            setIsEditable(false);
            navigate.navigate("Home");  
        } catch (error) {
            console.error("Error edit user:", error);
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
                                placeholder="username" 
                                onChangeText={setUsername}
                                value={username}
                                editable={isEditable}
                                returnKeyType="next"
                                ref={usernameRef}
                                onSubmitEditing={() => emailRef.current?.focus()}
                            />
                            <Input 
                                placeholder="e-mail" 
                                onChangeText={setEmail}
                                value={email}
                                editable={isEditable}
                                returnKeyType="next"
                                ref={emailRef}
                                onSubmitEditing={() => fullNameRef.current?.focus()}
                            />
                        
                            <Input
                                placeholder="full name" 
                                onChangeText={setFullName}
                                value={fullName}
                                editable={isEditable}
                                returnKeyType="done"
                                ref={fullNameRef}
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
