import { AbstractControl, Validators } from "@angular/forms";

import { ValidacaoInput } from './validacao-input';

export class NgFormularioValidacoes {

  public static login(control: AbstractControl) {
    const login = control?.value;

    if (ValidacaoInput.telefone(login)) {
      return null;
    }
    return Validators.email(control) === null ? null : { login: true };
  }
}
