import { IsEmail, IsString, IsBoolean, IsInt, Validate } from "class-validator";
import { Type } from "class-transformer";
import { IsUniqueConstraint } from "src/shared/validation/is-unique-constraint";
import { IsUnique } from "src/shared/is-unique";

export class CreateUserDto{

    @IsString()
    form_title: string;

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