import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    // @ts-ignore
    loadChildren: () => import('login/Module')
      .then(m => m.LoginModule)
  },
  {
    path: 'product',
    // @ts-ignore
    loadChildren: () => import('product/Module')
      .then(m => m.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
