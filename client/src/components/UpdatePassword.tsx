import { ChangeEvent, useState } from 'react'
import { IUpdatePassword } from '../typeDefs'

const [updatePassword, setUpdatePassword] = useState<IUpdatePassword>({
  username: '',
  currentPassword: '',
  newPassword: ''
})

const { username, currentPassword, newPassword } = updatePassword

const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  setUpdatePassword({ ...updatePassword, [e.target.name]: e.target.value })
}

const UpdatePassword = (): JSX.Element => {
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
