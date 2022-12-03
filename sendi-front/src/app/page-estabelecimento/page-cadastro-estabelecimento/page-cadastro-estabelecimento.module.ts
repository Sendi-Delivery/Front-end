import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCadastroEstabelecimentoRoutingModule } from './page-cadastro-estabelecimento-routing.module';
import { PageCadastroEstabelecimentoComponent } from './page-cadastro-estabelecimento/page-cadastro-estabelecimento.component';


@NgModule({
  declarations: [
    PageCadastroEstabelecimentoComponent,
  ],
  imports: [
    CommonModule,
    PageCadastroEstabelecimentoRoutingModule
  ]
})
export class PageCadastroEstabelecimentoModule { }
