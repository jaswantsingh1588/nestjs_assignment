"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUniqueConstraint = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
let IsUniqueConstraint = class IsUniqueConstraint {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async validate(value, args) {
        const { tableName, column } = args.constraints[0];
        console.log(tableName, column);
        const isExists = await this.entityManager
            .getRepository(tableName).
            createQueryBuilder(tableName).
            where({ [column]: value }).getOne();
        return isExists ? false : true;
    }
    defaultMessage(validationArguments) {
        return 'Unique-Id already exist';
    }
};
exports.IsUniqueConstraint = IsUniqueConstraint;
exports.IsUniqueConstraint = IsUniqueConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsUniqueConstraint', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], IsUniqueConstraint);
//# sourceMappingURL=is-unique-constraint.js.map