import { Test } from '@nestjs/testing';
import { PetRadarAccountService } from './account.service';

describe('PetRadarAccountService', () => {
  let service: PetRadarAccountService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PetRadarAccountService],
    }).compile();

    service = module.get(PetRadarAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
