import React, { ChangeEvent, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../Graphql/mutation'

interface Idata {
  name: string
  username: string
  password: string
}

const CreateUser = (): string | any => {
  const [data, setData] = useState<Idata>({
    name: '',
    username: '',
    password: ''
  })
  const { name, username, password } = data
  const [createUser, { error }] = useMutation(CREATE_USER)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    createUser({ variables: { name, username, password } })
  }

  return (
    <div>
      <input name='name' placeholder='name' onChange={changeHandler} />
      <input name='username' placeholder='username' onChange={changeHandler} />
      <input name='password' placeholder='password' onChange={changeHandler} />
      <button onClick={handleClick}>Create User</button>
    </div>
  )
}

export default CreateUser
