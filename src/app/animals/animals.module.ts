import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalsComponent} from './animals.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [AnimalsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: AnimalsComponent}
    ]),
    MaterialModule
  ]
})
export class AnimalsModule {
}
