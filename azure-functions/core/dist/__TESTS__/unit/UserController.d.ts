export interface User {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
}
export declare class UserController {
    private users;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | undefined>;
    getUserFilter(firstName?: string, lastName?: string): Promise<User[]>;
    getUserByDateOfBirth(dateOfBirth?: Date): Promise<User[]>;
}
declare const _default: import("../../src").AzureFunction<any>;
export default _default;
