import { DDD_VALIDOS } from '../constantes/ddd';

export class ValidacaoInput {

  public static telefone(telefone: string): boolean {
    const ddd = +telefone?.substring(0, 2);
    telefone = telefone?.substring(2);

    if (! this.dddValido(ddd)) {
      return false;
    }
    return this.numeroTelefoneValido(telefone);
  }

  private static numeroTelefoneValido(telefone: string): boolean {
    const TELEFONE_REGEX = /^[0-9]{8,9}$/;
    return TELEFONE_REGEX.test(telefone);
  }

  private static dddValido(ddd: number): boolean {
    const dddEncontrado = DDD_VALIDOS.find(element => element.ddd === ddd);
    if (dddEncontrado === undefined) {
      return false;
    }
    return true;
  }
}
