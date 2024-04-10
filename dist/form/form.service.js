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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const form_entity_1 = require("./entity/form.entity");
const typeorm_2 = require("typeorm");
let FormService = class FormService {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    getInfo(form_title) {
        return this.formRepository.find({ 'where': { form_title } });
    }
    create(createFormDto) {
        return this.formRepository.save(createFormDto);
    }
    update(updateFormDto, form_title) {
        return this.formRepository.update(form_title, updateFormDto);
    }
};
exports.FormService = FormService;
exports.FormService = FormService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(form_entity_1.Form)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FormService);
//# sourceMappingURL=form.service.js.map