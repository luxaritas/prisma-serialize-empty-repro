import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.node.upsert({
        where: {id: 1},
        create: {id: 1, value: 5},
        update: {value: 5}
    });
}

main();