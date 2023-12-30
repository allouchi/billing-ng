import { Adresse } from './Adresse';

export class Client {
  id: number;
  socialReason: string;
  email: string;
  adresseClient: Adresse;

  constructor(
    id: number,
    socialReason: string,
    email: string,
    adresseClient: Adresse
  ) {
    this.id = id;
    this.socialReason = socialReason;
    this.email = email;
    this.adresseClient = adresseClient;
  }
}
