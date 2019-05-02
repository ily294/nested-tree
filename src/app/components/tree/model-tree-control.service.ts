import {NestedTreeControl} from '@angular/cdk/tree';
import {Observable} from 'rxjs';
import {BasicTreeItemInterface} from '@app-classes/tree';
import {Injectable} from '@angular/core';

@Injectable()
export class ModelTreeControlService extends NestedTreeControl<BasicTreeItemInterface> {

  constructor(getChildren: (dataNode: BasicTreeItemInterface) => (Observable<BasicTreeItemInterface[]> | BasicTreeItemInterface[])) {
    super(getChildren);
  }

  expandWithChildren(dataNode: BasicTreeItemInterface): void {
    this.nodeTraversal(dataNode, node => this.expand(node));
  }

  collapseWithChildren(dataNode: BasicTreeItemInterface): void {
    this.nodeTraversal(dataNode, node => this.collapse(node));
  }

  selectWithChildren(dataNode: BasicTreeItemInterface, selected: boolean): void {
    this.nodeTraversal(dataNode, node => this.select(node, selected));
  }

  select(dataNode: BasicTreeItemInterface, selected: boolean): void {
    dataNode.selected = selected;
  }

  childrenSelectedInfo(dataNode: BasicTreeItemInterface): { selectedCount: number; notSelectedCount: number } {
    const rez = {
      selectedCount: 0,
      notSelectedCount: 0
    };
    this.treeTraversal(dataNode.children as any, (node) => {
      if (node.selected) {
        rez.selectedCount++;
      } else {
        rez.notSelectedCount++;
      }
    });
    return rez;
  }

  getSelectedNodes(dataNode: BasicTreeItemInterface | BasicTreeItemInterface[]): BasicTreeItemInterface[] {
    const selectedNodes = [];
    this.treeTraversal(dataNode, (node) => {
      if (node.selected) {
        selectedNodes.push(node);
      }
    });
    return selectedNodes;
  }

  expand(dataNode: BasicTreeItemInterface): void {
    dataNode.expanded = true;
    super.expand(dataNode);
  }

  collapse(dataNode: BasicTreeItemInterface): void {
    dataNode.expanded = false;
    super.collapse(dataNode);
  }

  isExpanded(dataNode: BasicTreeItemInterface): boolean {
    return dataNode.expanded || super.isExpanded(dataNode);
  }

  toggle(dataNode: BasicTreeItemInterface): void {
    if (this.isExpanded(dataNode)) {
      this.collapseWithChildren(dataNode);
    } else {
      this.expandWithChildren(dataNode);
    }

  }

  protected nodeTraversal(dataNode: BasicTreeItemInterface, fn: (node: BasicTreeItemInterface) => void) {
    fn(dataNode);
    if (dataNode.children && dataNode.children.length > 0) {
      for (const child of dataNode.children) {
        this.nodeTraversal(child, fn);
      }
    }
  }

  protected treeTraversal(dataNode: BasicTreeItemInterface | BasicTreeItemInterface[], fn: (node: BasicTreeItemInterface) => void) {

    if (dataNode instanceof Array) {
      for (const node of dataNode) {
        this.nodeTraversal(node, fn);
      }
    } else {
      this.nodeTraversal(dataNode, fn);
    }

  }

}
