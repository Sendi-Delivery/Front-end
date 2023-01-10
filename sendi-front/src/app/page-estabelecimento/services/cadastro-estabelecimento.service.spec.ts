import { TestBed } from '@angular/core/testing';

import { CadastroEstabelecimentoService } from './cadastro-estabelecimento.service';

describe('CadastroEstabelecimentoService', () => {
  let service: CadastroEstabelecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroEstabelecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
