export class Row  {
  pergunta: string;
  ordem: number;
  editar: string;
  excluir: string;

  constructor(
    pergunta: string,
    ordem: number,
    editar: string,
    excluir: string
  ) {
    this.pergunta = pergunta;
    this.ordem = ordem;
    this.editar = editar;
    this.excluir = excluir;
  }
}
