import { Controller, Request, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from '@nestjs/passport';

@Controller()
export class AppController {

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
   login(@Request() req: any) {
    return req.user;
  }
}
