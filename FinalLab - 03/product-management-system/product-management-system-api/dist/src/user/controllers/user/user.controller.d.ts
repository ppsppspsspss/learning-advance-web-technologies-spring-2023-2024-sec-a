import { updateUserDTO } from 'src/user/DTOs/update-user.dto';
import { UserService } from 'src/user/services/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(search: string): Promise<import("../../../entities/user.entity").UserEntity[]>;
    getUser(userID: string): Promise<import("../../../entities/user.entity").UserEntity>;
    updateUser(userID: string, updateUserDTO: updateUserDTO): Promise<boolean>;
    deleteUser(userID: string): Promise<import("typeorm").DeleteResult>;
}
