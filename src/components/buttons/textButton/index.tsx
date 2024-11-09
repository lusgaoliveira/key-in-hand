import { ButtonProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


type TextButtonProps = ButtonProps & {
    disabled?: boolean; 
    color?: string; 
    style?: object;
} 
export default function TextButton({disabled, color, style, ...rest} : TextButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, style && style]}>
            <Text style={styles.buttonText}>{rest.title}</Text>
        </TouchableOpacity>
    );
}