import { z } from "zod";

export const UserSchemaValidation = z.object({
    id: 
    z.number({
        required_error: "User id is required.",
        invalid_type_error: "User id must be a number.",
    }).int().positive("User id must be positive."),

    email: 
    z.string({
    required_error: "Email is required.",
    invalid_type_error: "Email must be a string.",
    }).regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email format is invalid").trim().toLowerCase(),

    password: 
    z.string().min(8, "Password must be at least 8 characters long."),

    createUserSchema: { 
        email: UserSchemaValidation.email,
        password: UserSchemaValidation.password
    },    
})
