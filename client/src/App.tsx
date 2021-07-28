import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import CreateUser from './components/CreateUser'
import ListofUsers from './components/ListofUsers'
import UpdatePassword from './components/UpdatePassword'

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  })

  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />
        <ListofUsers />
        <UpdatePassword />
      </ApolloProvider>
    </>
  )
}

export default App
