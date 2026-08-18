import dotenv from 'dotenv'
import { spawnSync } from 'child_process'
import { resolve } from 'path'

dotenv.config({ path: resolve(process.cwd(), '.env'), override: true })
dotenv.config({ path: resolve(process.cwd(), '.env.local'), override: true })

const args = process.argv.slice(2)
const result = spawnSync('node_modules/.bin/prisma', args, {
  stdio: 'inherit',
  env: process.env,
})

process.exit(result.status ?? 0)
