import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AliensComponent} from './aliens.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [AliensComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AliensModule {
}
