import { useMutation, useQuery } from '@apollo/client'
import { DELETE_USER } from '../Graphql/mutation'
import { GET_ALL_USERS } from '../Graphql/queries'
import { Idata } from '../typeDefs'

const ListofUsers = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS)
  console.warn(error)

  const [deleteUser] = useMutation(DELETE_USER)

  const delUser = (id: Idata) => deleteUser({ variables: { id } })

  return (
    <div>
      {loading && !data ? (
        <div>Loading....</div>
      ) : (
        data &&
        data.getAllUsers.map((user: Idata | any) => {
          return (
            <div
              key={user.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '15px',
                border: '1px solid grey'
              }}
            >
              <div>
                Name: {user.name}
                <br />
                Username: {user.username}
              </div>
              <div>
                <button onClick={() => delUser(user.id)}>Delete</button>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default ListofUsers
