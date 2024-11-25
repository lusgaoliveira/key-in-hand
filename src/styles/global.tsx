import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const global = StyleSheet.create({
    text: {
        color: theme.light.text,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0,
        margin: 0,
        fontFamily: 'Text',
        alignSelf: 'center'
    },
    title: {
        color: theme.light.text,
        fontSize: 28,
        fontFamily: 'Title',
        fontWeight: 'bold',
    },
    background: {
        backgroundColor: theme.light.background,
    }
});
