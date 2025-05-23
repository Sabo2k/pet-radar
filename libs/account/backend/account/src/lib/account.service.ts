import { Injectable } from '@nestjs/common';
import { PrismaClient, Account } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PetRadarAccountService {
    public getAllAccounts(): Promise<Account[]> {
        return prisma.account.findMany();
    }
}
