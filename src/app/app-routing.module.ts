import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AliensComponent} from './aliens/aliens.component';
import {AnimalsComponent} from './animals/animals.component';
import {PlantsComponent} from './plants/plants.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AliensComponent,
  },
  {
    path: 'animals',
    loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsModule)
  },
  {
    path: 'plants',
    loadChildren: () => import('./plants/plants.module').then(m => m.PlantsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
