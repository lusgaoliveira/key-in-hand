import { ButtonProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


type TextButtonProps = ButtonProps & {
    color?: string; 
    style?: object;
} 
export default function TextButton({color, style, ...rest} : TextButtonProps) {
    return (
        <TouchableOpacity 
            style={[styles.button, style && style]}
            {...rest}
        >
            <Text style={styles.buttonText}>{rest.title}</Text>
        </TouchableOpacity>
    );
}