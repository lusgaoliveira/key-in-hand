// Importa a função StyleSheet do React Native para criar estilos e o tema personalizado
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window"); 
import { global } from "../../../styles/global";

import { theme } from "../../../../theme";

// Define os estilos usando StyleSheet.create
const styles = StyleSheet.create({
    
    container: {
        width: '100%',
        height: 'auto'
    },

    button: {
        width: '50%',
        padding: '4%',
        margin: '1%',
        alignSelf: 'center',
        borderRadius: 5,          
        alignItems: 'center',      
        justifyContent: 'center', 
    },

    text: {
        color: theme.light.text, 
        fontSize: global.title.fontSize
    },

    
    moveForward: {
        backgroundColor: theme.light.moveForward,
    },

   
    stepBack: {
        backgroundColor: theme.light.stepBack, 
    },
});

export default styles;