export class TvaInfos {
  totalTvaPaye: number;
  totalTvaRestant: number;
  totalTTC: number;

  constructor(totalTvaPaye: number, totalTvaRestant: number, totalTTC: number) {
    this.totalTTC = totalTTC;
    this.totalTvaPaye = totalTvaPaye;
    this.totalTvaRestant = totalTvaRestant;
  }
}
