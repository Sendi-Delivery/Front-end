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

  private static dddValido(ddd: number): boolean {
    const dddEncontrado = DDD_VALIDOS.find(element => element.ddd === ddd);
    if (dddEncontrado === undefined) {
      return false;
    }
    return true;
  }

  private static numeroTelefoneValido(telefone: string): boolean {
    const TELEFONE_REGEX = /^[0-9]{8,9}$/;
    return TELEFONE_REGEX.test(telefone);
  }

  public static cpf(cpf: string): boolean {
    const tamanhoCpf = 11;
    if (cpf.length != tamanhoCpf) {
      return true;
    }
    const digitoValidador = cpf.substring(9);
    let digitoCpf = cpf.substring(0, 9);
    let peso = 10;
    let contador = 0;
    for (let i = 0; i < digitoCpf.length; i++) {
      contador += +digitoCpf.charAt(i) * peso;
      peso--;
    }
    let restoDigitoVerificador = contador % 11;
    let primeiroDigitoVerificador;
    if (restoDigitoVerificador < 2) {
      primeiroDigitoVerificador = 0;
    }
    else {
      primeiroDigitoVerificador = 11 - restoDigitoVerificador;
    }
    if (primeiroDigitoVerificador != +digitoValidador.charAt(0)) {
      return true;
    }

    digitoCpf += digitoValidador.charAt(0);
    peso = 11;
    contador = 0;
    for (let i = 0; i < digitoCpf.length; i++) {
      contador += +digitoCpf.charAt(i) * peso;
      peso--;
    }
    restoDigitoVerificador = contador % 11;
    let segundoDigitoVerificador;
    if (restoDigitoVerificador < 2) {
      segundoDigitoVerificador = 0;
    }
    else {
      segundoDigitoVerificador = 11 - restoDigitoVerificador;
    }
    if (segundoDigitoVerificador != +digitoValidador.charAt(1)) {
      return true;
    }

    return false;
  }

  public static cnpj(cnpj: string): boolean {
    const tamanhoCnpj = 14;
    if (cnpj.length != tamanhoCnpj) {
      return true;
    }
    const digitoValidador = cnpj.substring(12);
    let digitoCnpj = cnpj.substring(0, 12);
    let peso = 5;
    let contador = 0;

    for (let i = 0; i < digitoCnpj.length; i++) {
      contador += +digitoCnpj.charAt(i) * peso;
      if (--peso == 1) {
        peso = 9;
      }
    }

    let restoDigitoVerificador = contador % 11;
    let primeiroDigitoVerificador;
    if (restoDigitoVerificador < 2) {
      primeiroDigitoVerificador = 0;
    }
    else {
      primeiroDigitoVerificador = 11 - restoDigitoVerificador;
    }
    if (primeiroDigitoVerificador != +digitoValidador.charAt(0)) {
      return true;
    }

    digitoCnpj += digitoValidador.charAt(0);

    peso = 6;
    contador = 0;

    for (let i = 0; i < digitoCnpj.length; i++) {
      contador += +digitoCnpj.charAt(i) * peso;
      if (--peso == 1) {
        peso = 9;
      }
    }

    restoDigitoVerificador = contador % 11;
    let segundoDigitoVerificador;
    if (restoDigitoVerificador < 2) {
      segundoDigitoVerificador = 0;
    }
    else {
      segundoDigitoVerificador = 11 - restoDigitoVerificador;
    }

    if (segundoDigitoVerificador != +digitoValidador.charAt(1)) {
      return true;
    }

    return false;
  }

}
