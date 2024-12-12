import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: theme.light.background,
        shadowColor: '#000',    
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black', 
    },
    dataContainer: {
        flexDirection: 'column',
        width: '70%',
        flexWrap: 'wrap'
    },
    password: {
        color: theme.light.stepBack,
        fontSize: 19
    },
    date: {
        color: theme.light.placeholder,
    },
    separator: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 100,
    }
    });

export default styles;