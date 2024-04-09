import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(formTitle: string): Promise<import("./entity/user.entity").User[]>;
    postUser(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entity/user.entity").User>;
    updateUser(body: any, formTitle: string): Promise<import("typeorm").UpdateResult>;
    getUser(param: {
        userId: number;
    }): Promise<import("./entity/user.entity").User>;
    deleteUser(param: {
        userId: number;
    }): void;
}
