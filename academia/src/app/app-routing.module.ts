import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginBusinessComponent } from './login-business/login-business.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login-business', component: LoginBusinessComponent },
  { path: 'login-usuario', component: LoginUsuarioComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'ranking', component: RankingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
