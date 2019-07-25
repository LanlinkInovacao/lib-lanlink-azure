import { connect } from "../../src/bindings/Binding";
import {
  Get,
  HttpTrigger,
  Param,
  Query
} from "../../src/triggers/http/HttpTrigger";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

@HttpTrigger("users")
export class UserController {
  private users: User[] = [
    {
      id: 1,
      firstName: "João Pedro",
      lastName: "Queiroz",
      dateOfBirth: new Date(2021, 10, 1)
    },
    {
      id: 2,
      firstName: "Tiago",
      lastName: "Queiroz",
      dateOfBirth: new Date(2022, 4, 5)
    },
    {
      id: 3,
      firstName: "Mateus",
      lastName: "Queiroz",
      dateOfBirth: new Date(2023, 7, 3)
    }
  ];

  @Get()
  async getUsers(): Promise<User[]> {
    return this.users;
  }

  @Get("{id:number}")
  async getUser(@Param() id: number): Promise<User | undefined> {
    const user = this.users.find(item => item.id === id);

    return user;
  }

  @Get("filter")
  async getUserFilter(
    @Query() firstName?: string,
    @Query("lastName") lastName?: string
  ): Promise<User[]> {
    let users = this.users.filter(item =>
      firstName !== undefined ? item.firstName === firstName : true
    );
    users = users.filter(item =>
      lastName !== undefined ? item.lastName === lastName : true
    );

    return users;
  }

  @Get("filter-of-date-birth")
  async getUserByDateOfBirth(
    @Param(":date") dateOfBirth?: Date
  ): Promise<User[]> {
    const users = this.users.filter(item => item.dateOfBirth === dateOfBirth);

    return users;
  }
}

export default connect(UserController);
