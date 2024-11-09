import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { forwardRef } from "react";


function Input({...rest} : TextInputProps, ref: React.Ref<TextInput>) {
    
    return (
        <View style = {styles.inputContainer}>
            <TextInput
                style={styles.input}
                ref={ref}
                placeholder={rest.placeholder}
                {...rest}
            />
        </View>
    )
}

export default forwardRef(Input)