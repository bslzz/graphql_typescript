// everything related to READ in CRUD goes to Queries folder
// everything related to CUD in CUD goes to Mutations folder

import { GraphQLObjectType, GraphQLSchema } from 'graphql'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {}
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {}
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
