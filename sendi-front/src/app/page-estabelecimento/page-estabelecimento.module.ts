import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEstabeledimentoComponent } from './page-estabeledimento/page-estabeledimento.component';
import { PageEstabelecimentoRoutingModule } from './page-estabelecimento-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageEstabelecimentoRoutingModule
  ],
  declarations: [PageEstabeledimentoComponent]
})
export class PageEstabelecimentoModule { }
