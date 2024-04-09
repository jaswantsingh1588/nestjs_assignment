import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    getInfo(form_title: string): Promise<User[]> {
        return this.userRepository.find({'where': {form_title}});
    }

    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto);
    }

    update(updateUserDto: updateUserDto, form_title: string){
        return this.userRepository.update(form_title, updateUserDto);
    }

    getUser(id: number){
        return this.userRepository.findOne({where: {id}});
    }

    findByEmail(email: string){
        return this.userRepository.findOne({'where': {email}});
    }

    delete(params:{userId: number}){
        return params;
    }
}
