import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { global } from "../../../styles/global";
import styles from "./styles";
type StyleKeys = 'moveForward' | 'stepBack';

type ButtonProps = TouchableOpacityProps & {
    title: string;        
    className: StyleKeys; 
};

export default function Button({ title, className, ...rest }: ButtonProps) {
    

    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={[styles[className], styles.button]} {...rest}>
        
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}