import { object, string, boolean } from "yup";

const LoginSchema = object({
    username: string()
            .trim()
            .required('Username is required'),
    password: string()
            .trim()
            .required('Password is required'),
    keepConnected: boolean(),
});

export default LoginSchema;