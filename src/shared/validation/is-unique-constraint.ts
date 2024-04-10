import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { IsUniqueConstraintInput } from "../is-unique";
import { EntityManager } from "typeorm";
import { Injectable } from "@nestjs/common";

@ValidatorConstraint({ name: 'IsUniqueConstraint', async: true})

@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface{
    
    constructor(private readonly entityManager: EntityManager){}

    async validate(
        value:any,
        args?: ValidationArguments,
    ): Promise<boolean> {
        const {tableName, column}: IsUniqueConstraintInput = args.constraints[0]; 
        console.log(tableName, column);
        
        const isExists = await this.entityManager
        .getRepository(tableName).
        createQueryBuilder(tableName).
        where({[column]: value}).getOne();

        return isExists ? false: true;
        
    }
    
    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'Unique-Id already exist';
    }
}
