import { FlatList, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import styles from "./styles";
import IconButton from "../../components/buttons/iconButton";
import { useNavigation } from "@react-navigation/native";
import SimpleInput from "../../components/inputs/simpleInput";
import keys from "../../mock/keys";
import Card from "../../components/cards/card";

type homeParamsList = NativeStackNavigationProp<RoutesParams, 'Home'>
export default function HomeScreen() {

    const navigation = useNavigation<homeParamsList>();

    return (
        <View style={styles.container}>
            
            <View style={styles.containerSearch}>
                <SimpleInput placeholder="Search" style={styles.input} />
                <IconButton  icon="search" style={styles.iconButton} />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>
                    My Keys
                </Text>
                
            </View>
                
            <FlatList
                data={keys}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View id={item.id.toString()}>
                        <Card 
                            data={{
                                    ...item, 
                                    id: item.id.toString()}} 
                        />
                    </View>

                )}
            />
            <View style={styles.containerButtons} >
                <IconButton icon="plus-circle" />
            </View>
        </View>
    
    );
}