import { Test, TestingModule } from '@nestjs/testing';
import { ExercsisesService } from './exercsises.service';

describe('ExercsisesService', () => {
  let service: ExercsisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercsisesService],
    }).compile();

    service = module.get<ExercsisesService>(ExercsisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
