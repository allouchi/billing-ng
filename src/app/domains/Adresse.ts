export class Adresse {
  id: number;
  numero: string;
  rue: string;
  codePostal: string;
  localite: string;
  pays: string;

  constructor(
    id: number,
    numero: string,
    rue: string,
    codePostal: string,
    localite: string,
    pays: string
  ) {
    this.id = id;
    this.numero = numero;
    this.rue = rue;
    this.codePostal = codePostal;
    this.localite = localite;
    this.pays = pays;
  }
}
