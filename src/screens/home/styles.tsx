import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.light.background,
    },
    highContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '12%',
        marginBottom: '20%',
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
    },
    containerLogout: {
        justifyContent: 'center',
        width: '10%',
        position: 'absolute', 
        left: 2, 
    },
    logoutButton: {
        alignSelf: 'center',
    },
    containerSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: '70%',
        alignSelf: 'center', 
    },
    input: {
        color: 'black',
        marginLeft: '2%',
        fontSize: 24,
        fontWeight: 'bold',
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2%',
    },
    containerEdit: {
        justifyContent: 'center',
        width: '10%',
        position: 'absolute', 
        right: 2, 
    },
    editButton: {
        alignSelf: 'center',
    },
    containerTitle: {
        paddingBottom: '8%',
        width: '75%'
    },
    textTitle: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    containerForm: {    
        justifyContent: 'center',                              
    },
    containerButtons: {  
        width: '100%',
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
});

export default styles;