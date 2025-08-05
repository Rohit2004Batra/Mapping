// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.city.createMany({
    data: [
      { name: 'Jaipur', state: 'Rajasthan', mapUrl: '/maps/jaipur.pdf' },
      { name: 'Mumbai', state: 'Maharashtra', mapUrl: '/maps/mumbai.pdf' },
      { name: 'Delhi', state: 'Delhi', mapUrl: '/maps/delhi.pdf' },
    ],
  });
}

main()
  .then(() => {
    console.log('✅ Seed complete');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
