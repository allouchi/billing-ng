export class Role {
  id: number;
  roleName: string;
  description: string;

  constructor(id: number, roleName: string, description: string) {
    this.id = id;
    this.roleName = roleName;
    this.description = description;
  }
}
