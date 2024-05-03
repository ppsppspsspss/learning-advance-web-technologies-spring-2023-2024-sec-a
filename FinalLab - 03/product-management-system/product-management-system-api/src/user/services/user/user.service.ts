import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { updateUserDTO } from 'src/user/DTOs/update-user.dto';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    async getAllUsers(search: string) {
        return await this.userRepo.find({
            where: {
                fullname: ILike(`%${search}%`),
            }
        })
    }

    async getUser(userID: string) {
        return await this.userRepo.findOne({
            where:{
                userID
            }
        })
    }

    async updateUser(userID: string, updateUserDTO: updateUserDTO) {
        const res = await this.userRepo.findOne({
            where: {
                userID
            }
        })

        if(!res) return false

        res.fullname = updateUserDTO.fullname
        res.username = updateUserDTO.username
        res.phone = updateUserDTO.phone
        res.email = updateUserDTO.email

        this.userRepo.save(res)
        return true

    }

    async deleteUser(userID: string) {

        return await this.userRepo.delete({
            userID
        })

    }

}
