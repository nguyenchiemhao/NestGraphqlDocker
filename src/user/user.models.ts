import { User, UserCreateResponse } from "src/graphql";

export interface UserModel extends User { }
export interface CreateUserModel extends Omit<User, "id"> { }
export interface UserCreateResponseModel extends Omit<UserCreateResponse, "id"> { }
export interface SearchUserModel {
  items: User[]
  numOfItems: number
}