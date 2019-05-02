import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {MatListModule} from '@angular/material';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule {
}
