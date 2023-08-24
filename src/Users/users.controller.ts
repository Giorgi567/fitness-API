import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDTO } from './DTO/create.user.dto';
import { updateUserDTO } from './DTO/update.user.dto';
import { authService } from 'src/Users/Authentication/auth.service';
import { singInDTO } from './DTO/signIn.user.dto';

@Controller('users')
@Injectable()
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: authService,
  ) {}
  @Post('/signUp')
  async signUp(@Body() Body: createUserDTO) {
    return this.authService.signUp(Body);
  }

  @Post('/signIn')
  async signIn(@Body() Body: singInDTO) {
    return this.authService.signIn(Body);
  }
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUser(+id);
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() Body: Partial<updateUserDTO>,
  ) {
    return this.userService.updateUser(+id, Body);
  }

  @Post()
  async createUser(@Body() Body: createUserDTO) {
    console.log(`in controller`);
    return this.userService.createUser(Body);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
