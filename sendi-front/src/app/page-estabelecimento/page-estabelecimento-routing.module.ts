import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageCadastroEstabelecimentoComponent } from './page-cadastro-estabelecimento/page-cadastro-estabelecimento.component';
import { PageCadastroLoginEstabelecimentoComponent } from './page-cadastro-login-estabelecimento/page-cadastro-login-estabelecimento.component';
import { PageEstabeledimentoComponent } from './page-estabeledimento/page-estabeledimento.component';
import { ConfirmarDadosComponent } from './confirmar-dados/confirmar-dados.component';
import { FinalizacaoCadastroComponent } from './finalizacao-cadastro/finalizacao-cadastro.component';

const routes: Routes = [
  {path:'estabelecimento',component: PageEstabeledimentoComponent},
  {path:'cadastro',component: PageCadastroEstabelecimentoComponent},
  {path:'cadastro-login',component: PageCadastroLoginEstabelecimentoComponent},
  {path:'cadastro-confirmacao',component: ConfirmarDadosComponent},
  {path:'cadastro-finazalicao',component: FinalizacaoCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageEstabelecimentoRoutingModule { }

