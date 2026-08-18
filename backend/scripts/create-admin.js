import dotenv from 'dotenv';

dotenv.config({ path: `${process.cwd()}/.env` });
dotenv.config({ path: `${process.cwd()}/.env.local`, override: true });

const { default: bcrypt } = await import('bcryptjs');
const { default: prisma } = await import('../lib/prisma.js');

const [email, password] = process.argv.slice(2);

if (!email || !password) {
  console.error('Usage: npm run create-admin -- <email> <password>');
  process.exit(1);
}

if (!email.includes('@')) {
  console.error('Email invalide.');
  process.exit(1);
}

if (password.length < 8) {
  console.error('Le mot de passe doit faire au moins 8 caractères.');
  process.exit(1);
}

const existing = await prisma.user.findUnique({ where: { email } });
if (existing) {
  console.error(`Un utilisateur avec l'email "${email}" existe déjà.`);
  await prisma.$disconnect();
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);
const user = await prisma.user.create({ data: { email, password: hash } });

console.log(`Administrateur créé (id: ${user.id}, email: ${user.email})`);
await prisma.$disconnect();
