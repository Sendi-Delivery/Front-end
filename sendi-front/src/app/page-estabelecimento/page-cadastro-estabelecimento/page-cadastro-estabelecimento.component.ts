import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-page-cadastro-estabelecimento',
  templateUrl: './page-cadastro-estabelecimento.component.html',
  styleUrls: ['./page-cadastro-estabelecimento.component.scss']
})
export class PageCadastroEstabelecimentoComponent implements OnInit {



  constructor() {

  }
  readonly LOGO = '../../../assets/images/logo.png';


  ngOnInit(): void {
  }

}
