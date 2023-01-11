import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgFormularioValidacoes } from 'src/app/shared/validacoes/ng-formulario-validacoes';

@Component({
  selector: 'app-page-cadastro-estabelecimento',
  templateUrl: './page-cadastro-estabelecimento.component.html',
  styleUrls: ['./page-cadastro-estabelecimento.component.scss']
})

export class PageCadastroEstabelecimentoComponent {

  readonly LOGO = '../../../assets/images/logo.png';
  public formulario: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.formulario = formBuilder.group({
      razaoSocial:[null, [Validators.required, Validators.maxLength(200)]],
      cpfCnpj:[null, [Validators.required], NgFormularioValidacoes.identificadorCnpjCpf]
    });
  }

}
