import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,  
        height: '100%',
        backgroundColor: theme.light.background,  
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.light.background,
        justifyContent: 'flex-start', 
        width: '100%',  
    },
    imgContainer: {  
        alignContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        marginTop: '15%',
        marginBottom: '18%'
    },
    inputsContainer: {
        width: '100%',       
        alignItems: 'center', 
        justifyContent: "flex-end",
        paddingTop: '15%'
    },
    keepLoginContainer: {
        width: '100%',
        alignItems: 'center',               
    },
    keepLoginContent: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    checkbox: {
        alignSelf: 'center',
        borderRadius: 50,
        marginLeft: "-6%"  
    },
    keepText: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18,
        marginRight: '15%'
    },
    accountExistsContainter: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        marginHorizontal: 10,  
        paddingVertical: 10
    },
    button: {
        width: '60%',
        paddingVertical: 10,
        marginHorizontal: 10, 
        marginVertical: '15%', 
        marginBottom: 0,
    },
    textButton: {
        padding: 0,
        margin: 0,
    },
    accountCreateContainer: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
    },
    textAccountCreate: {
        fontSize: 18,
    },
    cont: {
        paddingBottom: '5%',
    }
});