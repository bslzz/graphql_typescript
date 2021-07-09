import { createConnection } from 'typeorm'
import { Users } from '../Entities/Users'

export const db = createConnection({
  type: 'mysql',
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  logging: true,
  synchronize: true,
  entities: [Users]
})
