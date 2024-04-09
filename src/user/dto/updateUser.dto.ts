import {IsString, IsEmail, IsInt, IsBoolean} from 'class-validator';
import { Type } from 'class-transformer';
import { IsUnique } from "src/shared/is-unique";

export class updateUserDto{
    
    @IsString()
    @IsUnique({tableName: 'user', column: 'unique_id'})
    unique_id: string;

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Type(() => Number)
    phone_number: number;

    @IsBoolean()
    @Type(() => Boolean)
    is_graduate: boolean;
}