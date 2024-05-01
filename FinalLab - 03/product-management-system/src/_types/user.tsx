export interface User {
    
    fullname: string
    username: string
    phone: string
    email: string
    password?: string
    salt: string;
    role: number;

}