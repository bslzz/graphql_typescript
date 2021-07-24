import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import CreateUser from './components/CreateUser'

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  })

  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />
      </ApolloProvider>
    </>
  )
}

export default App
