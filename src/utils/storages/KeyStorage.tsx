import AsyncStorage from '@react-native-async-storage/async-storage';

export class KeyStorage {
    static STORAGE_KEY = '@keys';

    static async saveKey(key : string, data : object) {
        const keys = JSON.parse(await AsyncStorage.getItem(this.STORAGE_KEY) || '{}');
        keys[key] = data;
        await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(keys));
    }

    static async getKey(key : string) {
        const keys = JSON.parse(await AsyncStorage.getItem(this.STORAGE_KEY) || '{}');
        return keys[key] || null;
    }

    static async getAllKeys() {
        const keys = JSON.parse(await AsyncStorage.getItem(this.STORAGE_KEY) || '{}');
        return keys;
    }

    static async deleteKey(key : string) {
        const keys = JSON.parse(await AsyncStorage.getItem(this.STORAGE_KEY) || '{}');
        delete keys[key];
        await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(keys));
    }

    static async clearAllKeys() {
        await AsyncStorage.removeItem(this.STORAGE_KEY);
    }
}