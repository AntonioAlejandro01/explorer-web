import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'chest',
        loadChildren: () => import('../chest/chest.module').then(m => m.ChestModule)
      },
      {
        path: 'creator',
        loadChildren: () => import('../creator/creator.module').then(m => m.CreatorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
