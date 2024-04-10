import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './entity/form.entity';

@Module({
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService],
  imports: [TypeOrmModule.forFeature([Form])],
})
export class FormModule {}
