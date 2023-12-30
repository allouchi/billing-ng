export class DataPDF {
  fileContent: Blob;
  fileName: string;

  constructor(fileContent: Blob, fileName: string) {
    this.fileContent = fileContent;
    this.fileName = fileName;
  }
}
