import { Client } from './Client';
import { Consultant } from './Consultant';
import { Facture } from './Facture';

export class Prestation {
  id: number;
  tarifHT?: number;
  delaiPaiement?: number;
  consultant?: Consultant;
  client?: Client;
  facture?: Facture[];
  designation?: string;
  numeroCommande?: string;
  clientPrestation?: string;
  quantite?: number;
  dateFin?: string;
  dateDebut?: string;
  siret?: string;
  constructor(
    id: number,
    tarifHT: number,
    delaiPaiement: number,
    consultant: Consultant,
    client: Client,
    facture: Facture[],
    designation: string,
    numeroCommande: string,
    clientPrestation: string,
    quantity: number,
    dateFin: string,
    dateDebut: string,
    siret: string
  ) {
    this.id = id;
    this.tarifHT = tarifHT;
    this.delaiPaiement = delaiPaiement;
    this.consultant = consultant;
    this.client = client;
    this.facture = facture;
    this.designation = designation;
    this.numeroCommande = numeroCommande;
    this.clientPrestation = clientPrestation;
    this.quantite = quantity;
    this.dateFin = dateFin;
    this.dateDebut = dateDebut;
    this.siret = siret;
  }
}
