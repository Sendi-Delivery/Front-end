import { Injectable } from '@angular/core';
import {  FormBuilder, FormGroup, MinLengthValidator, Validators  } from '@angular/forms';

@Injectable()
export class CadastroEstabelecimentoService {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      razao_social: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(60)]],
      Endereco: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      numero: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]],
      bairro: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      cidade: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      estado: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      Complemento: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    });
  }
}
