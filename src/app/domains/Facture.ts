export class Facture {
  id: number;
  numeroFacture: string;
  dateFacturation: string;
  dateEcheance: string;
  dateEncaissement: string;
  delaiPaiement: number;
  montantTVA: number;
  prixTotalHT: number;
  prixTotalTTC: number;
  nbJourRetard: number;
  fraisRetard: number;
  factureStatus: string;
  tarifHT?: number;
  statusDesc: string;
  quantite: number;
  numeroCommande: string;
  designation: string;
  clientPrestation: string;
  filePath: string;
  moisFacture: string;

  constructor(
    id: number,
    numeroFacture: string,
    dateFacturation: string,
    dateEcheance: string,
    dateEncaissement: string,
    delaiPaiement: number,
    montantTVA: number,
    prixTotalHT: number,
    prixTotalTTC: number,
    nbJourRetard: number,
    fraisRetard: number,
    factureStatus: string,
    tarifHT: number,
    statusDesc: string,
    quantite: number,
    numeroCommande: string,
    designation: string,
    clientPrestation: string,
    filePath: string,
    moisFacture: string
  ) {
    this.id = id;
    this.numeroFacture = numeroFacture;
    this.dateFacturation = dateFacturation;
    this.dateEcheance = dateEcheance;
    this.dateEncaissement = dateEncaissement;
    this.delaiPaiement = delaiPaiement;
    this.montantTVA = montantTVA;
    this.prixTotalHT = prixTotalHT;
    this.prixTotalTTC = prixTotalTTC;
    this.nbJourRetard = nbJourRetard;
    this.fraisRetard = fraisRetard;
    this.factureStatus = factureStatus;
    this.tarifHT = tarifHT;
    this.statusDesc = statusDesc;
    this.quantite = quantite;
    this.numeroCommande = numeroCommande;
    this.designation = designation;
    this.clientPrestation = clientPrestation;
    this.filePath = filePath;
    this.moisFacture = moisFacture;
  }
}
