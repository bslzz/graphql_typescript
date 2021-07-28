import { ApolloError, useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import { UPDATE_PASSWORD } from '../Graphql/mutation'
import { IUpdatePassword } from '../typeDefs'

const UpdatePassword = (): JSX.Element => {
  const [updateUserPassword, setUpdateUserPassword] = useState<IUpdatePassword>(
    {
      username: '',
      currentPassword: '',
      newPassword: ''
    }
  )

  const { username, currentPassword, newPassword } = updateUserPassword

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD)
  console.log('error', error)
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateUserPassword({
      ...updateUserPassword,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    console.log(error)

    updatePassword({
      variables: { username, oldPassword: currentPassword, newPassword }
    })

    setUpdateUserPassword({
      username: '',
      currentPassword: '',
      newPassword: ''
    })
  }

  return (
    <div>
      <input
        name='username'
        placeholder='username'
        value={username}
        onChange={changeHandler}
      />
      <input
        name='currentPassword'
        placeholder='Current Password'
        value={currentPassword}
        onChange={changeHandler}
      />
      <input
        name='newPassword'
        placeholder='New Password'
        value={newPassword}
        onChange={changeHandler}
      />
      <button onClick={handleClick}>Update Password</button>
    </div>
  )
}

export default UpdatePassword
