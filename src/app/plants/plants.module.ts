import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlantsComponent} from './plants.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [PlantsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: PlantsComponent}
    ]),
  ]
})
export class PlantsModule {
}
