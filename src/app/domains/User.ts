import { Company } from './Company';
import { Role } from './Role';

export class User {
  userName?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  company?: Company;
  roles?: Role[];
  constructor(
    userName?: string,
    firstName?: string,
    lastName?: string,
    password?: string,
    company?: Company,
    roles?: Role[]
  ) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.company = company;
    this.roles = roles;
  }
}
