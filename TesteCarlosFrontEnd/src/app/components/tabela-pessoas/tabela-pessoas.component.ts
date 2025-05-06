import { Component, ViewChild } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela-pessoas',
  templateUrl: './tabela-pessoas.component.html',
  styleUrls: ['./tabela-pessoas.component.css']
})
export class TabelaPessoasComponent {
  displayedColumns: string[] = ['cpf', 'nome', 'genero', 'endereco', 'idade', 'municipio', 'estado'];
  dataSource = new MatTableDataSource<Pessoa>([]);
  filtro = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pessoaService: PessoaService) {}

  carregar() {
    this.pessoaService.getPessoas().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  aplicarFiltro() {
    this.dataSource.filter = this.filtro.trim().toLowerCase();
  }
}
