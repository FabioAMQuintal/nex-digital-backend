export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserInput extends Required<IUser>{}
export interface UserOuput extends Required<IUser> {}