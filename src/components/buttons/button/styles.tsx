// Importa a função StyleSheet do React Native para criar estilos e o tema personalizado
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window"); 
import { global } from "../../../styles/global";

import { theme } from "../../../../theme";

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 5,          
        alignItems: 'center',      
        justifyContent: 'center', 
    },

    text: {
        color: 'white', 
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