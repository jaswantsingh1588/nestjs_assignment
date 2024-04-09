import { ValidationOptions } from "class-validator";
export type IsUniqueConstraintInput = {
    tableName: string;
    column: string;
};
export declare function IsUnique(options: IsUniqueConstraintInput, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
