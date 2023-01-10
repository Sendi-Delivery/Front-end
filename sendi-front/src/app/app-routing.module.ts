import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sendi', loadChildren: () => import('./page-estabelecimento/page-estabelecimento.module').then(m => m.PageEstabelecimentoModule) },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sendi/estabelecimento'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
