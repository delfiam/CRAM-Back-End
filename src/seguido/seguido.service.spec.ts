import { Test, TestingModule } from '@nestjs/testing';
import { SeguidoService } from './seguido.service';

describe('SeguidoService', () => {
  let service: SeguidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeguidoService],
    }).compile();

    service = module.get<SeguidoService>(SeguidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
