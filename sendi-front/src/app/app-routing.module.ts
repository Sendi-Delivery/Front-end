import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cadastro-estabelecimento'
  },
  {
    path: 'home',
    loadChildren: () => import('./page-estabelecimento/page-estabelecimento.module').then( m => m.PageEstabelecimentoModule)
  },
  {
    path: 'cadastro-estabelecimento',
    loadChildren: () => import('./page-estabelecimento/page-cadastro-estabelecimento/page-cadastro-estabelecimento.module').then( m => m.PageCadastroEstabelecimentoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
