import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveKey = async (key: string, data: object) => {
    try {
        const existingKeys = await AsyncStorage.getItem("@keys");
        const keys = existingKeys ? JSON.parse(existingKeys) : {};
        keys[key] = data; // Salvar o objeto com a chave única
        await AsyncStorage.setItem("@keys", JSON.stringify(keys));
    } catch (error) {
        console.error("Error saving key to storage:", error);
        throw error;
    }
};