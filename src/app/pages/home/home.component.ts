import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TreeService} from '@app-services/tree';
import {BasicTreeItemInterface} from '@app-classes/tree';
import {mergeMap} from 'rxjs/operators';
import {BasicItemInterface} from '@app-classes/basic-item.interface';
import {of} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  tree: BasicTreeItemInterface[];
  list: BasicItemInterface[];

  constructor(protected treeService: TreeService, protected changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.treeService.getTree()
      .pipe(
        mergeMap((data) => {
          if (data && data.length > 0) {
            return of(data);
          }
          return this.treeService.generateTree();
        })
      )
      .subscribe(tree => {
        this.tree = tree;
        this.changeDetectorRef.detectChanges();
      });
  }

  onSelect(nodes: BasicTreeItemInterface[]) {
    this.list = nodes;
    setTimeout(() => {
      this.changeDetectorRef.detectChanges();
    });
  }

  onChangeTreeState(tree: BasicTreeItemInterface[]) {
    this.treeService.saveTree(tree);
  }


}
