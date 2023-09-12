import { Test } from '@nestjs/testing';
import { authService } from './auth.service';
import { UsersService } from '../users.service';
import { UserEntity } from '../Entity/users.entity';
import { createUserDTO } from '../DTO/create.user.dto';

describe('autService', () => {
  let service: authService;

  beforeEach(async () => {
    //   creating fake usersService
    const fakeUserService = {
      getAllUsers: () => Promise.resolve([]),
      createUser: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password }),
    };
    const module = await Test.createTestingModule({
      providers: [
        authService,
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
      ],
    }).compile();

    service = module.get(authService);
  });

  it('can create instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('creates new user with salted and hashed password', async () => {
    const user = await service.signUp({
      Username: 'Xynlep',
      email: 'gaga@gmail.com',
      password: 'asdasdasdasd',
      age: 18,
      weight: 145,
      height: 186,
      gender: 'MALE',
    } as createUserDTO);

    if (user instanceof UserEntity) {
      console.log(`bruhss`);
      // Ensure password was hashed (you can add your hashing validation logic here)
      expect(user.password).not.toEqual('asdasdasdasd');
      const [salt, hash] = user.password.split('/');
      expect(salt).toBeDefined();
      expect(hash).toBeDefined();
    }
  });
});
