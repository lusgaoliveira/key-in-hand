import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.light.background,
    },

    containerSearch: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        width: '60%',
        marginTop: '15%',
        marginBottom: '20%'
    },
    containerTitle: {
        paddingBottom: '8%',
        width: '75%'
    },
    textTitle: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    input: {
        color: "black",
        marginLeft: '2%',
        fontSize: 24,
        fontWeight: 'bold'
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2%'
    },

    containerForm: {    
        justifyContent: 'center',                              
    },

    containerButtons: {
        bottom: 0,
        paddingBottom: 10
    },
});

export default styles;