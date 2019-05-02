import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeComponent} from './tree.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatTree, MatTreeModule} from '@angular/material';

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [TreeComponent]
})
export class TreeModule {
}
