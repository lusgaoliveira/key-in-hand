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
       
        padding: '4%',
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
        width: '60%',
        backgroundColor: theme.light.moveForward,
    },

   
    stepBack: {
        width: '40%',
        backgroundColor: theme.light.stepBack, 

    },
});

export default styles;