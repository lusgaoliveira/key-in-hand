import { Pressable, PressableProps, StyleProp, Text, View, ViewStyle } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type IconsKeys = 'edit' | 'plus-circle' | 'search' | 'trash' | 'copy' | 'chevron-left' | 'user' ;

type ButtonProps = PressableProps & {
    icon: IconsKeys;
    style?: StyleProp<ViewStyle>;
    iconSize?: number; 
};

export default function IconButton({ icon, style, iconSize = 24, ...rest} : ButtonProps) {
    return (
        <View style={[styles.container, style]}>
            <Pressable style={styles.button} {...rest}>
                <FontAwesome name={icon} size={iconSize}/>
            </Pressable>
        </View>
    )
}