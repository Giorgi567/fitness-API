import { Test, TestingModule } from '@nestjs/testing';
import { ExercsisesController } from './exercsises.controller';

describe('ExercsisesController', () => {
  let controller: ExercsisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercsisesController],
    }).compile();

    controller = module.get<ExercsisesController>(ExercsisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
