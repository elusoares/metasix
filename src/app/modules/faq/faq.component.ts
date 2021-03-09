import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Resultado, PesquisasService } from 'src/app/core/services/pesquisas.service';
import { Row } from './row';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  pesquisas: Resultado[];
  rows: Array<Row>;
  displayedColumns: string[] = [
    'pergunta',
    'ordem',
    'editar',
    'excluir'
  ];
  displayedColumnsNames: string[] = [
    'Pergunta',
    'Ordem',
    'Editar',
    'Excluir'
  ];
  dataSource: MatTableDataSource<Row>;

  constructor(
    private pesquisasService: PesquisasService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.rows = new Array();
    this.pesquisasService.getPesquisas().subscribe((res) => {
      this.pesquisas = res;
      // console.log(res);
      for (let r of res) {
        this.rows.push(new Row(r.question, r.position, 'editar', 'excluir'));
      }
      this.dataSource.data = this.rows;
    });
  }

}
