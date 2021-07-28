import { ChangeEvent, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../Graphql/mutation'
import { Idata } from '../typeDefs'

const CreateUser = (): string | any => {
  const [data, setData] = useState<Idata>({
    name: '',
    username: '',
    password: ''
  })
  const { name, username, password } = data
  const [createUser, { error }] = useMutation<Idata>(CREATE_USER)
  console.warn(error)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleClick = (): void => {
    createUser({ variables: { name, username, password } })
    alert('Saved')
    setData({
      name: '',
      username: '',
      password: ''
    })
  }

  return (
    <div>
      <input
        name='name'
        placeholder='name'
        value={name}
        onChange={changeHandler}
      />
      <input
        name='username'
        placeholder='username'
        value={username}
        onChange={changeHandler}
      />
      <input
        name='password'
        placeholder='password'
        value={password}
        onChange={changeHandler}
      />
      <button onClick={handleClick}>Create User</button>
    </div>
  )
}

export default CreateUser
