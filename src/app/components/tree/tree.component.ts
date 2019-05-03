import {ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {MatCheckboxChange} from '@angular/material';
import {ModelTreeControlService} from '@app-components/tree/model-tree-control.service';
import {BasicTreeItemInterface} from '@app-classes/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ModelTreeControlService
  ]
})
export class TreeComponent implements OnInit {

  @ContentChild(TemplateRef)
  contentTemplate: TemplateRef<any>;

  get tree(): BasicTreeItemInterface[] {
    return this._tree;
  }

  @Input()
  set tree(value: BasicTreeItemInterface[]) {
    if (value) {
      this._tree = [...value];
      const selectedNodes = this.treeControl.getSelectedNodes(this._tree);
      this.selectedNodes.emit(selectedNodes);
    } else {
      this.selectedNodes.emit([]);
    }
  }

  private _tree: BasicTreeItemInterface[];

  @Output()
  readonly selectedNodes: EventEmitter<BasicTreeItemInterface[]> = new EventEmitter();
  @Output()
  readonly change: EventEmitter<BasicTreeItemInterface[]> = new EventEmitter();

  select(node: any, data: MatCheckboxChange) {
    this.treeControl.selectWithChildren(node, data.checked);
    this.selectedNodes.emit(this.treeControl.getSelectedNodes(this.tree));
    this.change.emit([...this.tree]);
  }

  showIndeterminate(node: BasicTreeItemInterface): boolean {
    const selectedInfo = this.treeControl.childrenSelectedInfo(node);
    if (node.selected) {
      return selectedInfo.notSelectedCount !== 0;
    } else {
      return selectedInfo.selectedCount > 0;
    }
  }

  treeNodeToggle(node: BasicTreeItemInterface) {
    this.treeControl.toggle(node);
    this.change.emit([...this.tree]);
  }

  hasChild = (i: number, node: any) => node.children && (node.children.length > 0) ? true : false;

  ngOnInit() {
  }

  constructor(public treeControl: ModelTreeControlService) {

  }

}
