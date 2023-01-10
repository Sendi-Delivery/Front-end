import { ValidacaoInput } from './validacao-input';

describe('ValidacaoInput', () => {
  it('deve retornar false se ddd inválido for passado', () => {
    const TELEFONE_INVALIDO = '0951232812';
    const validacao = ValidacaoInput.telefone(TELEFONE_INVALIDO);
    expect(validacao).toBeFalse();
  });

  it('deve retornar false se telefone inválido for passado', () => {
    const TELEFONE_INVALIDO = '2151232';
    const validacao = ValidacaoInput.telefone(TELEFONE_INVALIDO);
    expect(validacao).toBeFalse();
  });

  it('deve retornar true se ddd e telefone válido for passado', () => {
    const TELEFONE_INVALIDO = '2151232812';
    const validacao = ValidacaoInput.telefone(TELEFONE_INVALIDO);
    expect(validacao).toBeTrue();
  });
});
