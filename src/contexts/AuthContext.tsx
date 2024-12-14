import { 
    createContext, 
    useContext, 
    useEffect, 
    useState 
} from "react";
import { Alert } from 'react-native';
import { UserStorage } from "../utils/storages/UserStorage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Encryption } from "../utils/crypto/Encryption";

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

type resetPasswordType = {
    username: string,
    email : string,
}
type AuthContextType = {
    isAuthenticated: boolean,
    isFirstAccess: boolean,
    keepConnected: boolean,
    user: userType,
    login: (data: loginType) => Promise<void>,
    register: (data: userType) => Promise<void>,
    forgotPassword: (data: resetPasswordType) => Promise<void>,
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
            const storedKeepConnected = await AsyncStorage.getItem('@key-in-hand-keepConnected');

            if (storedUser) {
                setUser(storedUser);
                setIsAuthenticated(true);
            }

            if (storedKeepConnected) {
                setKeepConnected(JSON.parse(storedKeepConnected));
            }
        };

        loadStoredData();
    }, []);

    const login = async ({ username, password, keepConnected }: loginType) => {
        try {
            const storedUser = await UserStorage.getUser(username);
    
            if (storedUser) {
                const isValid = await Encryption.validatePassword(storedUser.password, password);
                
                if (isValid) {
                    setUser(storedUser);
                    setIsAuthenticated(true);
                    setKeepConnected(keepConnected);
    
                    await AsyncStorage.setItem('@key-in-hand-keepConnected', JSON.stringify(keepConnected));
                } else {
                    Alert.alert('Login', 'Invalid username or password.');
                }
            } else {
                Alert.alert('Login', 'User not found.');
            }
        } catch (error) {
            console.error('Error on login:', error);
            Alert.alert('Error', 'Unable to login.');
        }
    };
    

    const register = async ({ username, password, email, fullName }: userType) => {
        try {
            const existingUser = await AsyncStorage.getItem(username);
            if (!existingUser) {
                const encryptedPassword = await Encryption.hashPassword(password);  
                const newUser = { username, fullName, password: encryptedPassword, email };
                await UserStorage.saveUser(username, newUser);  
                Alert.alert('User successfully registered!');
            } else {
                Alert.alert('Registration Failed', 'Username is already taken.');
            }
    
        } catch (error) {
            console.error('Error on register:', error);
            Alert.alert('Unable to register!');
        }
    };
    
    
    const forgotPassword = async ({ username, email } : resetPasswordType) => {
        try {
            const storedUser = await UserStorage.getUser(username); 
            if (storedUser) {
                if(storedUser.email === email) {
                    const generateRandomPassword = () => {
                        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        let password = '';
                        for (let i = 0; i < 8; i++) {  
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            password += characters[randomIndex];
                        }
                        return password;
                    };

                    const newPassword = generateRandomPassword();
                    const encryptedPassword = await Encryption.hashPassword(newPassword);
                    storedUser.password = encryptedPassword;
                    
                    await UserStorage.saveUser(username, storedUser);
                    Alert.alert(`Password changed successfully. New password: ${newPassword}`);

                } else {
                    Alert.alert('E-mail is wrong.')
                }
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
        await AsyncStorage.removeItem('@key-in-hand-keepConnected'); 
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
