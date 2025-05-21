import { PrismaClient } from "../generated/prisma/client.js"; 
import { faker } from '@faker-js/faker';

/**
 * @see https://stackoverflow.com/a/75647821
 * @see https://github.com/prisma/prisma/discussions/19669#discussioncomment-12852313
 */
const prisma = new PrismaClient();

async function main() {
    for (let i = 0; i <= 10; i++) {
        await prisma.account.create({ 
            data:  {
                id: String(i),
                username: faker.internet.username(),
                email: faker.internet.email(),
                password: faker.internet.password(),
            }
        });
    }
}

main().catch((err) => {
    console.log(err);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})