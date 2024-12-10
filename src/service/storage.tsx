import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@keys';

export const saveKey = async (key: string, data: object) => {
    const keys = JSON.parse((await AsyncStorage.getItem(STORAGE_KEY)) || '{}');
    keys[key] = data;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
    console.log(data)
};

export const getKeys = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    console.log("AsyncStorage raw data:", data);
    return JSON.parse(data || '[]');
  };
  
export const getKey = async (key: string) => {
    const keysInData = await AsyncStorage.getItem(STORAGE_KEY);
    const keys = keysInData ? JSON.parse(keysInData) : {};
    return keys[key] || null;
};

export const deleteKey = async (key: string) => {
    const keysInData = await AsyncStorage.getItem(STORAGE_KEY);
    const keys = keysInData ? JSON.parse(keysInData) : {};
    delete keys[key];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
};