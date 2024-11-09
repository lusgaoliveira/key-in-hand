import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../../theme";
const { width, height } = Dimensions.get("window"); 


export const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
        backgroundColor: theme.light.background,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
        flexDirection: 'column',
    },
    imgContainer: {  
        alignContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        paddingTop: '15%',
        paddingBottom: '25%'
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
        marginLeft: "-5%"  
    },
    keepText: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        marginRight: '15%'
    },
    
    accountExistsContainter: {
        width: '100%',
        padding: '5%'
    },
    button: {
        marginTop: '15%', 
        marginBottom: 0,
        color: 'red'
    },
    textButton: {
        padding: 0,
        margin: 0,
        
    },
    accountCreateContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
    },
    
    textAccountCreate: {
        fontSize: 20,
        
    },

    cont: {
        paddingBottom: '4%'
    }
    
});
