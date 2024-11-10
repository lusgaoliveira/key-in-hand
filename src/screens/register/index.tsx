import { 
    Image, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    TextInput, 
    View 
} from "react-native";
import Input from "../../components/input";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/buttons/button";
import { SafeAreaView } from "react-native-safe-area-context";

type registerParamsList = NativeStackNavigationProp<RoutesParams, "Register">;

export default function RegisterScreen() {
    const passwordRef = useRef<TextInput>(null);
    const navigation = useNavigation<registerParamsList>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200} // Ajuste o valor conforme necessário
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
                            <Input
                                placeholder="conf password"
                                secureTextEntry
                                returnKeyType="done"
                            />
                            <Input
                                placeholder="full name"
                                returnKeyType="done"
                            />
                        </View>

                        <View style={styles.optionalsContainer}>
                            <Button
                                title="Change"
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
