import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastroEstabelecimentoComponent } from './page-cadastro-estabelecimento.component';

describe('PageCadastroEstabelecimentoComponent', () => {
  let component: PageCadastroEstabelecimentoComponent;
  let fixture: ComponentFixture<PageCadastroEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCadastroEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCadastroEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
