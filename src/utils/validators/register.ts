import { object, string, ref } from "yup";

const RegisterSchema = object({
    username: string()
            .trim()
            .required('Username is required'),
    email: string()
            .trim()
            .email('Email is required'),
    password: string()
            .trim()
            .min(8, 'Password must be at least 8 characters long')
            .matches(/[A-Z]/, 'The password should contain at least 1 uppercase character')
            .matches(/^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, 'The password must contain at least one special character')
            .required('Password is required'),
    confirmPassword: string()
            .oneOf([ref('password')], 'Passowors must match')
            .required('Confirm password is required'),
    fullName: string()
            .required('Full name is required')
});

export default RegisterSchema;