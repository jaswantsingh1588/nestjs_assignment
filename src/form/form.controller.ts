import { Controller, Delete, Get, Patch, Param, Post, Req, Body,Query } from '@nestjs/common';
import { FormService } from './form.service';
import { updateFormDto } from './dto/updateForm.dto';
import { CreateFormDto } from './dto/createForm.dto';

@Controller()
export class FormController {
    constructor(private formService: FormService){}

    @Get('/fill_data')
    getForm(@Query('form_title') formTitle: string) {
        return this.formService.getInfo(formTitle);
    }
  
    @Post('/form')
    postForm(@Body() createFormDto: CreateFormDto){
      return this.formService.create(createFormDto);
    }
  
    @Patch('/fill_data')
    updateForm(@Body() body: any, @Query('form_title') formTitle: string){
      return this.formService.update(body, formTitle);
    }
}
