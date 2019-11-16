import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'peticao-inicial',
    loadChildren: () => import('./pages/peticao-inicial/peticao-inicial.module').then( m => m.PeticaoInicialPageModule)
  },
  {
    path: 'upload-documentos',
    loadChildren: () => import('./pages/upload-documentos/upload-documentos.module').then( m => m.UploadDocumentosPageModule)
  },
  {
    path: 'processo',
    loadChildren: () => import('./pages/processo/processo.module').then( m => m.ProcessoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'acompanhamento',
    loadChildren: () => import('./pages/acompanhamento/acompanhamento.module').then( m => m.AcompanhamentoPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
