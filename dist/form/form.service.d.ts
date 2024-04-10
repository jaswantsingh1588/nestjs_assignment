import { Form } from './entity/form.entity';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/createForm.dto';
import { updateFormDto } from './dto/updateForm.dto';
export declare class FormService {
    private formRepository;
    constructor(formRepository: Repository<Form>);
    getInfo(form_title: string): Promise<Form[]>;
    create(createFormDto: CreateFormDto): Promise<CreateFormDto & Form>;
    update(updateFormDto: updateFormDto, form_title: string): Promise<import("typeorm").UpdateResult>;
}
