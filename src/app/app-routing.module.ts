import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backend/pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path: 'universite',
  loadChildren:()=>import('./universite/universite.module').then(x => x.UniversiteModule)},
  {path: 'cours',
  loadChildren:()=>import('./cours/cours.module').then(x => x.CoursModule)},
  {path:'admin/dashboard',component:DashboardComponent},
  {path:'admin',
  loadChildren:()=>import('./backend/univ-admin/univ-admin.module').then(x=>x.UnivAdminModule)},
  {path:'admin',
  loadChildren:()=>import('./backend/course-admin/course-admin.module').then(x=>x.CourseAdminModule)},

  //Backend
  { path:'', redirectTo:'equipe', pathMatch:'full'},
  { path: 'equipe', loadChildren: () => import('./backend/pages/equipe/equipe.module').then(m => m.EquipeModule) },
  { path: 'detailEquipe', loadChildren: () => import('./backend/pages/detail-equipe/detail-equipe.module').then(m => m.DetailEquipeModule) },
  { path: 'projet', loadChildren: () => import('./backend/pages/projet/projet.module').then(m => m.ProjetModule) },
  { path: 'tache', loadChildren: () => import('./backend/pages/tache/tache.module').then(m => m.TacheModule) },

  //Front
  { path: 'front/projet', loadChildren: () => import('./pages/projet/list-projet-front.module').then(m => m.ListProjetFrontModule) },
  { path: 'front/equipe', loadChildren: () => import('./pages/equipe/list-equipe-front.module').then(m => m.ListEquipeFrontModule) },
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}