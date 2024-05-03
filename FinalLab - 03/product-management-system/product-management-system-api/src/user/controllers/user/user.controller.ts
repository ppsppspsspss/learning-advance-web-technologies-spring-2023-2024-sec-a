import { Body, Controller, Delete, Get, Param, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { updateUserDTO } from 'src/user/DTOs/update-user.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers(@Query('search') search: string) {

        return await this.userService.getAllUsers(search)

    }
    
    @Get(':userID')
    async getUser(@Param('userID') userID: string) {

        return await this.userService.getUser(userID)

    }

    @Patch(":userID")
    @UsePipes(ValidationPipe)
    async updateUser(@Param('userID') userID: string, @Body() updateUserDTO: updateUserDTO) {

        return await this.userService.updateUser(userID, updateUserDTO)

    }

    @Delete(":userID")
    async deleteUser(@Param('userID') userID: string) {

        return this.userService.deleteUser(userID);

    }

}
