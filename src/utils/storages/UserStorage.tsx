import AsyncStorage from '@react-native-async-storage/async-storage';

export class UserStorage {
    static STORAGE_USER = '@users';

    static async saveUser(username: string, data: object): Promise<boolean> {
        try {
            const users = JSON.parse(await AsyncStorage.getItem(this.STORAGE_USER) || '{}');
            users[username] = data;
            await AsyncStorage.setItem(this.STORAGE_USER, JSON.stringify(users)); 
            console.log(data);
            return true;
        } catch (error) {
            console.error('Erro on save/edit user::', error);
            return false;
        }
    }
    static async getUser(username: string) {
        const users = JSON.parse(await AsyncStorage.getItem(this.STORAGE_USER) || '{}');
        return users[username] || null; 
    }

    static async getAllUsers() {
        const users = JSON.parse(await AsyncStorage.getItem(this.STORAGE_USER) || '{}');
        return users;
    }

    static async deleteUser(username : string) {
        const users = JSON.parse(await AsyncStorage.getItem(this.STORAGE_USER) || '{}');
        delete users[username];
        await AsyncStorage.setItem(this.STORAGE_USER, JSON.stringify(users));
    }

    static async clearAllUsers() {
        await AsyncStorage.removeItem(this.STORAGE_USER);
    }
}
