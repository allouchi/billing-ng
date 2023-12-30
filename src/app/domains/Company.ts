import { Adresse } from './Adresse';
import { Client } from './Client';
import { Consultant } from './Consultant';
import { Prestation } from './Prestation';
import { User } from './User';

/**
 * Company domain
 * @author M.ALIANE
 */
export class Company {
  id: number;
  socialReason: string;
  status: string;
  siret: string;
  rcsName: string;
  numeroTva: string;
  codeApe: string;
  numeroIban: string;
  numeroBic: string;
  companyAdresse: Adresse;
  users: User[];
  clients?: Client[];
  consultants?: Consultant[];
  prestations?: Prestation[];
  checked: boolean;

  constructor(
    id: number,
    socialReason: string,
    status: string,
    siret: string,
    rcsName: string,
    numeroTva: string,
    codeApe: string,
    numeroIban: string,
    numeroBic: string,
    companyAdresse: Adresse,
    users: User[],
    clients: Client[],
    consultants: Consultant[],
    prestations?: Prestation[],
    checked?: any
  ) {
    this.id = id;
    this.socialReason = socialReason;
    this.status = status;
    this.siret = siret;
    this.rcsName = rcsName;
    (this.numeroTva = numeroTva), (this.codeApe = codeApe);
    this.numeroIban = numeroIban;
    (this.numeroBic = numeroBic), (this.companyAdresse = companyAdresse);
    this.users = users;
    this.clients = clients;
    this.consultants = consultants;
    this.prestations = prestations;
    this.checked = checked;
  }
}
