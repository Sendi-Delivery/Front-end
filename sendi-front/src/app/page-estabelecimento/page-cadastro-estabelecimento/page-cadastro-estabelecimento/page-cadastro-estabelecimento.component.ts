import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cadastro-estabelecimento',
  templateUrl: './page-cadastro-estabelecimento.component.html',
  styleUrls: ['./page-cadastro-estabelecimento.component.scss']
})
export class PageCadastroEstabelecimentoComponent implements OnInit {

  constructor() { }
  readonly imagemCadastro = '../../../assets/images/imagem-cadastro-estabelecimento.png';
  readonly LOGO = '../../../assets/images/logo.png';


  ngOnInit(): void {
  }

}
