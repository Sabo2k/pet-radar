import { Test } from '@nestjs/testing';
import { PetRadarAccountController } from './account.controller';
import { PetRadarAccountService } from './account.service';

describe('PetRadarAccountController', () => {
  let controller: PetRadarAccountController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PetRadarAccountService],
      controllers: [PetRadarAccountController],
    }).compile();

    controller = module.get(PetRadarAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
