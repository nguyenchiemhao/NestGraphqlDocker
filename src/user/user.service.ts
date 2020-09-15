import { HttpStatus, Injectable } from '@nestjs/common';
import mockData from './user.data';
import { CreateUserModel, SearchUserModel, UserCreateResponseModel, UserModel } from './user.models';

@Injectable()
export class UserService {
  private user: UserModel[]
  constructor() {
    this.user = mockData
  }

  getUserById(id: string): UserModel {
    return this.user.filter(x => x.id == id)[0]
  }

  getAllUser(): UserModel[] {
    return this.user
  }

  searchUser(keySearch: string): SearchUserModel {
    const found = this.user.filter(x => x.name.toLowerCase().includes(keySearch)
      || x.email.toLowerCase().includes(keySearch))
    return {
      items: found,
      numOfItems: found.length - 1
    }
  }

  create({ email, password, name, gender }: CreateUserModel): UserCreateResponseModel {
    this.user.push({ id: this.user.length.toString(), email, password, name, gender })
    return {
      code: HttpStatus.CREATED,
      message: `Created User successfully (${this.user.length - 1})`,
      success: true
    }
  }

}
