import { object, string, boolean } from "yup";

const ResetSchema = object({
    username: string()
            .trim()
            .required('Username is required'),
    email: string()
            .trim()
            .email('Email is required'),
});

export default ResetSchema;