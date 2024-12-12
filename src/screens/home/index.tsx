import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routeParams";
import styles from "./styles";
import IconButton from "../../components/buttons/iconButton";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import SimpleInput from "../../components/inputs/simpleInput";
import { KeyStorage } from "../../storages/KeyStorage";
import Card from "../../components/cards/card";

type homeParamsList = NativeStackNavigationProp<RoutesParams, 'Home'>;

type Data = {
  id: string;
  title: string;
  username: string;
  password: string;
  description: string;
  createdAt: string;
};

export default function HomeScreen() {
  const navigation = useNavigation<homeParamsList>();
  const [keysList, setKeysList] = useState<Data[]>([]);

  const fetchData = async () => {
    const data = await KeyStorage.getAllKeys();

    const formattedData = data
      ? Object.values(data).map((item: any) => ({
          ...item,
          createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : '',
        }))
      : [];
    setKeysList(formattedData);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <View style={styles.container}>

      <View style={styles.highContainer}>

        <View style={styles.containerLogout}>
          <IconButton icon="chevron-left" style={styles.logoutButton}/>
        </View>
        
        <View style={styles.containerSearch}>
          <SimpleInput placeholder="Search" style={styles.input} />
          <IconButton icon="search" style={styles.iconButton}/>
        </View>
      </View>
      
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>My Keys</Text>
      </View>
      
      <FlatList
        data={keysList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card data={item} />
        )}
      />
      <View style={styles.containerButtons}>
        <IconButton icon="plus-circle" iconSize = {30} onPress={() => navigation.navigate('NewKey')} />
      </View>
    </View>
  );
}
