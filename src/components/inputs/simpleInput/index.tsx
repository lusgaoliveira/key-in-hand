import { TextInput, TextInputProps, View } from "react-native";
import { forwardRef } from "react";
import styles from "./styles";
import { global }from '../../../styles/global';

// Define o tipo InputProps, que inclui as propriedades de TextInput e uma propriedade personalizada 'title'
type InputProps = TextInputProps

// Função principal do componente Input com forwardRef
const SimpleInput = forwardRef<TextInput, InputProps>(({ ...rest }, ref) => {
    return (
        // Contêiner do input com o estilo básico
        <View style={styles.container}>
            <TextInput style={[styles.input, global.text]} ref={ref} {...rest}/>
        </View>
    );
});

export default SimpleInput;