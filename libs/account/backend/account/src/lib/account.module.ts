import { Module } from '@nestjs/common';
import { PetRadarAccountController } from './account.controller';
import { PetRadarAccountService } from './account.service';

@Module({
  controllers: [PetRadarAccountController],
  providers: [PetRadarAccountService],
  exports: [PetRadarAccountService],
})
export class PetRadarAccountModule {}
