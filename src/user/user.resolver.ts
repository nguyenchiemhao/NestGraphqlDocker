import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserModel, SearchUserModel, UserCreateResponseModel, UserModel } from './user.models';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query()
  user(@Args('id') id: string): UserModel {
    return this.userService.getUserById(id)
  }

  @Query()
  users(): UserModel[] {
    return this.userService.getAllUser()
  }

  @Query()
  search(@Args('keySearch') keySearch: string): SearchUserModel {
    return this.userService.searchUser(keySearch.toLowerCase())
  }

  @Mutation()
  create(@Args('user') user: CreateUserModel): UserCreateResponseModel {
    return this.userService.create(user)
  }
}
