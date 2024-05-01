import { UserEntity } from 'src/entities/user.entity';
import { updateUserDTO } from 'src/user/DTOs/update-user.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<UserEntity>);
    getAllUsers(search: string): Promise<UserEntity[]>;
    getUser(userID: string): Promise<UserEntity>;
    updateUser(userID: string, updateUserDTO: updateUserDTO): Promise<boolean>;
    deleteUser(userID: string): Promise<import("typeorm").DeleteResult>;
}
