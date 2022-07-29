export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  hash?: string;
}

export interface UserInput extends Partial<IUser>{}
export interface UserOuput extends Partial<IUser> {}