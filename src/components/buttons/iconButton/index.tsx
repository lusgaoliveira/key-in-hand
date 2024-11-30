import { Pressable, PressableProps, StyleProp, Text, View, ViewStyle } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type IconsKeys = 'edit' | 'plus-circle' | 'search' | 'trash' | 'copy';

type ButtonProps = PressableProps & {
    icon: IconsKeys;
    style?: StyleProp<ViewStyle>;
};

export default function IconButton({ icon, style, ...rest} : ButtonProps) {
    return (
        <View style={[styles.container, style]}>
            <Pressable style={styles.button} {...rest}>
                <FontAwesome name={icon} size={28}/>
            </Pressable>
        </View>
    )
}