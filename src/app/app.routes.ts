import { Routes } from '@angular/router';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';

export const routes: Routes = [

  {
    path:'',
    redirectTo:'listarPensamento',
    pathMatch:'full'
  },
  {
    path:'criarPensamento',
    component:CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component:ListarPensamentoComponent
  },
];
