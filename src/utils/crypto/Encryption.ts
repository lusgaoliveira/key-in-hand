import * as Crypto from 'expo-crypto';

const SECRET_KEY = 'companheiro-luigi-mangione';

export class Encryption {
    static async hashPassword(password: string): Promise<string> {
        const saltedPassword = `${password}${SECRET_KEY}`;
        const hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, saltedPassword);
        return hash;
    }

    static async validatePassword(storedHash: string, password: string): Promise<boolean> {
        const generatedHash = await this.hashPassword(password);
        return generatedHash === storedHash;
    }
}
