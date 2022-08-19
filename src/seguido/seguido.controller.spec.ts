import { Test, TestingModule } from '@nestjs/testing';
import { SeguidoController } from './seguido.controller';

describe('SeguidoController', () => {
  let controller: SeguidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguidoController],
    }).compile();

    controller = module.get<SeguidoController>(SeguidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
