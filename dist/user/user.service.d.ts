import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getInfo(form_title: string): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    update(updateUserDto: updateUserDto, form_title: string): Promise<import("typeorm").UpdateResult>;
    getUser(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    delete(params: {
        userId: number;
    }): {
        userId: number;
    };
}
