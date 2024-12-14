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
        paddingBottom: 20,
        backgroundColor: theme.light.background,
    },
    imgContainer: {
        alignItems: 'center',
        paddingTop: '15%',
        paddingBottom: '25%'
    },
    inputsContainer: {
        width: '100%',
        alignItems: 'center',
    },
    errorText : {
        fontSize: 14,
        color: '#0353A4'
    },
    optionalsContainer: {
        width: '100%',
        alignItems: 'center',
        padding: '5%',
    },
    button: {
        margin: '3%',
        paddingVertical: 10,
        marginHorizontal: 10, 
    },
});
