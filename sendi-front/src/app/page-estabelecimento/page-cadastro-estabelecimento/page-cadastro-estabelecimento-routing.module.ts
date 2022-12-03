import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCadastroEstabelecimentoComponent } from './page-cadastro-estabelecimento/page-cadastro-estabelecimento.component';

const routes: Routes = [
  {
    path:'',
    component: PageCadastroEstabelecimentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCadastroEstabelecimentoRoutingModule { }
