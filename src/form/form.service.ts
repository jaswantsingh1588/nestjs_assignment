import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entity/form.entity';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/createForm.dto';
import { updateFormDto } from './dto/updateForm.dto';


@Injectable()
export class FormService {

    constructor(
        @InjectRepository(Form)
        private formRepository: Repository<Form>
    ){}

    getInfo(form_title: string): Promise<Form[]> {
        return this.formRepository.find({'where': {form_title}});
    }

    create(createFormDto: CreateFormDto) {
        return this.formRepository.save(createFormDto);
    }

    update(updateFormDto: updateFormDto, form_title: string){
        return this.formRepository.update(form_title, updateFormDto);
    }
}
