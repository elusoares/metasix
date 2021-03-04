import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then( m => m.FaqModule)
      },
      {
        path: 'locais',
        loadChildren: () => import('./locais/locais.module').then( m => m.LocaisModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
