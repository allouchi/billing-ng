export class Consultant {
  id: number;
  firstName: string;
  lastName: string;
  fonction: string;
  email: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    fonction: string,
    email: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fonction = fonction;
    this.email = email;
  }
}
