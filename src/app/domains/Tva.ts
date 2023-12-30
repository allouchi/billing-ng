export class Tva {
  id: number;
  datePayment: string;
  montantPayment: number;
  exercise: string;
  siret: string;

  constructor(
    id: number,
    datePayment: string,
    montantPayment: number,
    exercise: string,
    siret: string
  ) {
    this.id = id;
    this.datePayment = datePayment;
    this.montantPayment = montantPayment;
    this.exercise = exercise;
    this.siret = siret;
  }
}
