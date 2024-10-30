import { TextInput, TextInputProps, View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useFonts, PasseroOne_400Regular } from '@expo-google-fonts/passero-one';


export default function Input({placeholder, secureTextEntry} : TextInputProps) {
    const [fontsLoaded] = useFonts({
        PasseroOne_400Regular,
    });
    if (!fontsLoaded) {
        return <ActivityIndicator size="small" color="#000" />; // Carregando enquanto a fonte não está disponível
    }
    return (
        <View style = {styles.inputContainer}>
            <TextInput
                style={[styles.input, { fontFamily: 'PasseroOne_400Regular' }]}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}