import { TextInput, View } from "react-native";
import { global } from "../../styles/global";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from '../../navigation/routeParams'
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/inputs/input";
import { styles } from "./styles";
import Button from "../../components/buttons/button";
import { useEffect, useRef } from "react";

type newTaskParamsList = NativeStackNavigationProp<RoutesParams, 'NewKey'>;

export default function NewKeyScreen() {
    const navigate = useNavigation<newTaskParamsList>();

    const titleRef = useRef<TextInput>(null);
    const usernameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    useEffect(() => {
        // Foca no input assim que a tela é montada
        if (titleRef.current) {
            titleRef.current.focus();
        }
    }, []);

    return (
        <View style={[styles.container]}>
            <View style={styles.inputsContainer}>
                <Input 
                    placeholder="Título" 
                    returnKeyType="next"
                    ref={titleRef}
                    onSubmitEditing={() => usernameRef.current?.focus()}
                    />
                <Input 
                    placeholder="Usuário" 
                    ref={usernameRef}
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    returnKeyType="next"
                    />
                <Input
                    placeholder="Senha" 
                    ref={passwordRef}
                    secureTextEntry
                    returnKeyType="done"
                    onSubmitEditing={() => navigate.navigate("Home")}
                />
            </View>
            <View>
                <View style={{ width: '40%' }}>
                    <Button className="stepBack" title="Cancelar" onPress={() => navigate.navigate("Home")} />
                </View>
                <View style={{ width: '40%' }}>
                    <Button className="moveForward" title="Salvar" onPress={() => navigate.navigate("Home")} />
                </View>
            </View>
        </View>
    );
}