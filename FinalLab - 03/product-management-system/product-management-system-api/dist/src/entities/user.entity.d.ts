export declare enum Role {
    ADMIN = 0,
    CUSTOMER = 1
}
export declare class UserEntity {
    userID: string;
    username: string;
    fullname: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    role: Role;
    checkPassword(password: any): Promise<boolean>;
}
