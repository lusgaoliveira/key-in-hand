import { StyleSheet } from "react-native";
import { theme } from "../../../theme";



export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: theme.light.background, 
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        backgroundColor: theme.light.background, 
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '8%',
        paddingBottom: '5%',
        backgroundColor: theme.light.background,
    },
    imgContainer: {
        alignItems: 'center',
        paddingTop: '15%',
        paddingBottom: '5%',
    },
    inputsContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },
    optionalsContainer: {
        width: '94%',
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        marginVertical: 15,
    },
    button: {
        width: '30%', 
        paddingVertical: 10,
        marginHorizontal: 10, 
        alignItems: 'center',
        borderRadius: 5,
        
    },
});
