/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageCadastroLoginEstabelecimentoComponent } from './page-cadastro-login-estabelecimento.component';

describe('PageCadastroLoginEstabelecimentoComponent', () => {
  let component: PageCadastroLoginEstabelecimentoComponent;
  let fixture: ComponentFixture<PageCadastroLoginEstabelecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCadastroLoginEstabelecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCadastroLoginEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
