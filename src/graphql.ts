
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserInfo {
    email: string;
    password: string;
    gender: string;
    name: string;
}

export interface IQuery {
    noop(): boolean | Promise<boolean>;
    user(id: string): User | Promise<User>;
    users(): User[] | Promise<User[]>;
    search(keySearch: string): SearchUserResponse | Promise<SearchUserResponse>;
}

export interface IMutation {
    ping(id: string): Ping | Promise<Ping>;
    create(user: UserInfo): UserCreateResponse | Promise<UserCreateResponse>;
}

export interface ISubscription {
    pong(): Pong | Promise<Pong>;
    created(email?: string): string | Promise<string>;
}

export interface Ping {
    id?: string;
}

export interface Pong {
    pingId?: string;
}

export interface User {
    id: string;
    name?: string;
    email: string;
    password: string;
    gender?: string;
}

export interface UserCreateResponse {
    code: number;
    success: boolean;
    message: string;
}

export interface SearchUserResponse {
    items: User[];
    numOfItems: number;
}
