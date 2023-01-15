export interface IUserData {
  email: string;
  password: string;
  username: string;
}

export interface IUserFormDTO extends Pick<IUserData, "email" | "password"> {}
