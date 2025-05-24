import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PetRadarAccountController, PetRadarAccountModule, PetRadarAccountService} from '@pet-radar/accounts';

@Module({
  imports: [PetRadarAccountModule],
  controllers: [AppController, PetRadarAccountController],
  providers: [AppService, PetRadarAccountService],
})
export class AppModule {}
