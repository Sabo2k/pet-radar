import { Controller, Get } from '@nestjs/common';
import { PetRadarAccountService } from './account.service';
import { Account } from '@prisma/client';
 

@Controller('account')
export class PetRadarAccountController {
  constructor(private petRadarAccountService: PetRadarAccountService) {}

  @Get()
  public async getAllAccounts(): Promise<Account[]> {
    return this.petRadarAccountService.getAllAccounts();
  }
}
