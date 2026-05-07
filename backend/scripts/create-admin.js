import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import readline from 'readline';

function prompt(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function promptHidden(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    let input = '';
    process.stdin.on('data', function handler(char) {
      if (char === '\n' || char === '\r') {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.stdin.removeListener('data', handler);
        process.stdout.write('\n');
        resolve(input);
      } else if (char === '') {
        process.exit();
      } else if (char === '') {
        if (input.length > 0) {
          input = input.slice(0, -1);
          process.stdout.write('\b \b');
        }
      } else {
        input += char;
        process.stdout.write('*');
      }
    });
  });
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('\n--- Création d\'un administrateur ---\n');

const email = await prompt(rl, 'Email : ');
rl.close();

if (!email || !email.includes('@')) {
  console.error('Email invalide.');
  process.exit(1);
}

const password = await promptHidden('Mot de passe : ');
const confirm = await promptHidden('Confirmer le mot de passe : ');

if (password !== confirm) {
  console.error('Les mots de passe ne correspondent pas.');
  process.exit(1);
}

if (password.length < 8) {
  console.error('Le mot de passe doit faire au moins 8 caractères.');
  process.exit(1);
}

const prisma = new PrismaClient();

const existing = await prisma.user.findUnique({ where: { email } });
if (existing) {
  console.error(`Un utilisateur avec l'email "${email}" existe déjà.`);
  await prisma.$disconnect();
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);
const user = await prisma.user.create({ data: { email, password: hash } });

console.log(`\nAdministrateur créé (id: ${user.id}, email: ${user.email})\n`);
await prisma.$disconnect();
