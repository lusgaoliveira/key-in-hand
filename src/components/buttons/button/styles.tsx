// Importa a função StyleSheet do React Native para criar estilos e o tema personalizado
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window"); 
import { global } from "../../../styles/global";

import { theme } from "../../../../theme";

// Define os estilos usando StyleSheet.create
const styles = StyleSheet.create({
    
    // Estilo do contêiner principal do botão, definindo largura e altura
    container: {
        width: '100%'
        
    },

    // Estilo base do botão, aplicado em conjunto com os estilos específicos (ex: primary, warning)
    button: {
        width: '50%',
        height: height * 0.07,
        margin: '3%',
        alignSelf: 'center',
        borderRadius: 5,          // Bordas arredondadas para uma aparência circular
        alignItems: 'center',      // Alinhamento centralizado do conteúdo horizontalmente
        justifyContent: 'center',  // Alinhamento centralizado do conteúdo verticalmente
        color: theme.light.backgroundInputs, // Cor do texto do botão (ajustada pelo tema)
    },

    // Estilo padrão para o texto do botão, usando a cor definida no tema
    text: {
        color: theme.light.backgroundInputs, // Cor padrão do texto
        fontSize: global.title.fontSize
    },

    // Estilo para o botão primário, usando uma cor de fundo de sucesso do tema
    moveForward: {
        backgroundColor: theme.light.moveForward, // Cor de fundo para o botão primário
    },

    // Estilo para o botão de aviso (stepback), usando cor de aviso do tema
    stepBack: {
        backgroundColor: theme.light.stepBack, // Cor de fundo para o botão de aviso
    },
});

export default styles;