import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'desarrollo',
    loadChildren: () => import('./desarrollo/desarrollo.module').then( m => m.DesarrolloPageModule)
  },
  {
    path: 'aplicaciones',
    loadChildren: () => import('./aplicaciones/aplicaciones.module').then( m => m.AplicacionesPageModule)
  },
  {
    path: 'io-t',
    loadChildren: () => import('./io-t/io-t.module').then( m => m.IoTPageModule)
  },
  {
    path: 'integradora',
    loadChildren: () => import('./integradora/integradora.module').then( m => m.IntegradoraPageModule)
  },
  {
    path: 'base',
    loadChildren: () => import('./base/base.module').then( m => m.BasePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  // Elimina las rutas a módulos inexistentes.
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
