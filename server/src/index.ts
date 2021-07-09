import express from 'express'
require('dotenv').config()
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { db } from './db/db'
import { schema } from './Schema'

const main = async () => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  await db

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  )
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

main().catch((err) => console.log(err))
