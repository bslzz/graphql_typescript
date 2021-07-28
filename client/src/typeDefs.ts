export interface Idata {
  id?: number
  name: string
  username: string
  password: string
}
export interface IUpdatePassword {
  username: string
  currentPassword: string
  newPassword: string
}
