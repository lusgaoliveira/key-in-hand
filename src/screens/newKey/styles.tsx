import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: theme.light.background, // garante fundo no SafeAreaView
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        backgroundColor: theme.light.background, // cobre toda a área de rolagem
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '50%',
        paddingBottom: '10%',
        backgroundColor: theme.light.background,
    },
    
    inputsContainer: {
        width: '100%',       
        alignItems: 'center', 
        justifyContent: "flex-end",
        paddingTop: '15%'
    },
    optionalsContainer: {
        width: '100%',
        alignItems: 'center',
        padding: '5%',
    },
    button: {
        margin: '3%',
    },
});
