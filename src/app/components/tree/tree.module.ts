import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeComponent} from './tree.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatTree, MatTreeModule} from '@angular/material';
import {GET_CHILDREN_FUNCTION_TOKEN} from '@app-components/tree/model-tree-control.service';

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [TreeComponent],
  providers: [
    {
      provide: GET_CHILDREN_FUNCTION_TOKEN,
      useValue: node => node.children
    }
  ]
})
export class TreeModule {
}
