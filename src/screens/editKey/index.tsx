import { Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";

type editKeyParamsList = NativeStackNavigationProp<RoutesParams, 'EditKey'>;

export default function EditKey({ route }: any) {
    return (
        <View>
            <Text>Dedadea</Text>
        </View>
    )
}