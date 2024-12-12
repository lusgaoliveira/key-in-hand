import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from 'react-native';
import { UserStorage } from "../storages/UserStorage";
import { KeyStorage } from "../storages/KeyStorage";
import AsyncStorage from '@react-native-async-storage/async-storage';


type userType = {
    username: string,
    password: string,
    email: string,
    fullName: string
};

type loginType = {
    username: string,
    password: string,
    keepConnected: boolean,
}

type AuthContextType = {
    isAuthenticated: boolean,
    isFirstAccess: boolean,
    keepConnected: boolean,
    user: userType,
    login: (data: loginType) => Promise<void>,
    register: (data: userType) => Promise<void>,
    forgotPassword: (username: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
};

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    isFirstAccess: true,
    keepConnected: false,
    user: { username: '', password: '', email: '', fullName: '' },
    login: async () => { },
    register: async () => { },
    forgotPassword: async () => { },
    logout: async () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isFirstAccess, setIsFirstAccess] = useState(true);
    const [keepConnected, setKeepConnected] = useState(false);
    const [user, setUser] = useState<userType>({ username: '', password: '', email: '', fullName: '' });

    useEffect(() => {
        const loadStoredData = async () => {
            const storedUser = await UserStorage.getUser('user');
            const storedKeepConnected = await KeyStorage.getKey('keepConnected');

            if (storedUser) {
                setUser(storedUser);
                setIsAuthenticated(true);
            }

            if (storedKeepConnected) {
                setKeepConnected(storedKeepConnected === true);
            }
        };

        loadStoredData();
    }, []);

    const login = async ({ username, password, keepConnected }: loginType) => {
        try {
            const storedUser = await UserStorage.getUser(username);

            if (storedUser && storedUser.password === password) {
                setUser(storedUser);
                setIsAuthenticated(true);
                setKeepConnected(keepConnected);

                await AsyncStorage.setItem('@key-in-hand-keepConnected', JSON.stringify(keepConnected));
            } else {
                Alert.alert('Login', 'Usuário ou senha inválidos.');
            }
        } catch {
            Alert.alert('Erro', 'Não foi possível realizar o login.');
        }
    };

    const register = async ({ username, password, email, fullName }: userType) => {
        try {
            const newUser = { fullName, username, password, email };
            await UserStorage.saveUser(username, newUser);
            setIsFirstAccess(false);
            Alert.alert('User successfully registered!');
        } catch {
            Alert.alert('Unable to register!');
        }
    };

    const forgotPassword = async (username: string, newPassword: string) => {
        try {
            const storedUser = await UserStorage.getUser(username);
            if (storedUser) {
                storedUser.password = newPassword;
                await UserStorage.saveUser(username, storedUser);
                Alert.alert('Password changed successfully');
            } else {
                Alert.alert('User not found');
            }
        } catch {
            Alert.alert('Unable to change password');
        }
    };

    const logout = async () => {
        setUser({ username: '', password: '', email: '', fullName: '' });
        setIsAuthenticated(false);
        setKeepConnected(false);
        await AsyncStorage.setItem('@key-in-hand-keepConnected', JSON.stringify(keepConnected));
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isFirstAccess,
                keepConnected,
                user,
                login,
                register,
                forgotPassword,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
