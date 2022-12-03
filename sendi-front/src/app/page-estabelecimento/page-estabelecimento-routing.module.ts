import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageEstabeledimentoComponent } from './page-estabeledimento/page-estabeledimento.component';

const routes: Routes = [
  {
   path:'',
   component: PageEstabeledimentoComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageEstabelecimentoRoutingModule { }

