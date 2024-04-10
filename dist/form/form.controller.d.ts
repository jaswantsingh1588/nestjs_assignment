import { FormService } from './form.service';
import { CreateFormDto } from './dto/createForm.dto';
export declare class FormController {
    private formService;
    constructor(formService: FormService);
    getForm(formTitle: string): Promise<import("./entity/form.entity").Form[]>;
    postForm(createFormDto: CreateFormDto): Promise<CreateFormDto & import("./entity/form.entity").Form>;
    updateForm(body: any, formTitle: string): Promise<import("typeorm").UpdateResult>;
}
