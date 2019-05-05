import {Injectable} from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {BasicTreeItemInterface} from '@app-services/tree';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

const TREE_ITEM_NAME = 'tree-items';

@Injectable()
export class TreeService {

  constructor(private storage: LocalStorage) {
  }

  getTree(): Observable<BasicTreeItemInterface[]> {

    return this.storage.getItem(TREE_ITEM_NAME).pipe(map(tree => tree || []));
  }

  saveTree(tree: BasicTreeItemInterface[]) {

    this.storage.setItem(TREE_ITEM_NAME, tree).subscribe();
  }

  generateTree(): Observable<BasicTreeItemInterface[]> {
    return of([
      {
        label: '1',
        children: [
          {
            label: '1.1',
            children: [],
            selected: false,
            expanded: false,
          },
          {
            label: '1.2',
            children: [],
            selected: false,
            expanded: false,
          },
          {
            label: '1.3',
            children: [
              {
                label: '1.3.1',
                children: [],
                selected: false,
                expanded: false,
              },
              {
                label: '1.3.2',
                children: [],
                selected: false,
                expanded: false,
              },
              {
                label: '1.3.3',
                children: [{
                  label: '1.3.1',
                  children: [],
                  selected: false,
                  expanded: false,
                },
                  {
                    label: '1.3.2',
                    children: [],
                    selected: false,
                    expanded: false,
                  },
                  {
                    label: '1.3.3',
                    children: [],
                    selected: false,
                    expanded: false,
                  }],
                selected: false,
                expanded: false,
              },
            ],
            selected: false,
            expanded: false,
          }
        ],
        selected: false,
        expanded: false,
      },
      {
        label: '2',
        children: [
          {
            label: '2.1',
            children: [],
            selected: false,
            expanded: false,
          },
          {
            label: '2.2',
            children: [],
            selected: false,
            expanded: false,
          },
          {
            label: '2.3',
            children: [
              {
                label: '2.3.1',
                children: [],
                selected: false,
                expanded: false,
              },
              {
                label: '2.3.2',
                children: [],
                selected: false,
                expanded: false,
              },
              {
                label: '2.3.3',
                children: [{
                  label: '2.3.1',
                  children: [],
                  selected: false,
                  expanded: false,
                },
                  {
                    label: '2.3.2',
                    children: [],
                    selected: false,
                    expanded: false,
                  },
                  {
                    label: '2.3.3',
                    children: [],
                    selected: false,
                    expanded: false,
                  }],
                selected: false,
                expanded: false,
              },
            ],
            selected: false,
            expanded: false,
          }
        ],
        selected: false,
        expanded: false,
      },
      {
        label: '3',
        children: [
          {
            label: '3.1',
            children: [],
            selected: false,
            expanded: false,
          },
          {
            label: '3.2',
            children: [],
            selected: false,
            expanded: false,
          },
          {
            label: '3.3',
            children: [
              {
                label: '3.3.1',
                children: [],
                selected: false,
                expanded: false,
              },
              {
                label: '3.3.2',
                children: [],
                selected: false,
                expanded: false,
              },
              {
                label: '3.3.3',
                children: [{
                  label: '3.3.1',
                  children: [],
                  selected: false,
                  expanded: false,
                },
                  {
                    label: '3.3.2',
                    children: [],
                    selected: false,
                    expanded: false,
                  },
                  {
                    label: '3.3.3',
                    children: [],
                    selected: false,
                    expanded: false,
                  }],
                selected: false,
                expanded: false,
              },
            ],
            selected: false,
            expanded: false,
          }
        ],
        selected: false,
        expanded: false,
      },
      {
        label: '4',
        children: [
          {
            label: '4.1',
            children: [],
            selected: false,
            expanded: false,
          },
          {
            label: '4.2',
            children: [],
            selected: false,
            expanded: false,
          },
          {
            label: '4.3',
            children: [
              {
                label: '4.3.1',
                children: [],
                selected: false,
                expanded: false,
              },
              {
                label: '4.3.2',
                children: [],
                selected: false,
                expanded: false,
              },
              {
                label: '4.3.3',
                children: [{
                  label: '4.3.1',
                  children: [],
                  selected: false,
                  expanded: false,
                },
                  {
                    label: '4.3.2',
                    children: [],
                    selected: false,
                    expanded: false,
                  },
                  {
                    label: '4.3.3',
                    children: [],
                    selected: false,
                    expanded: false,
                  }],
                selected: false,
                expanded: false,
              },
            ],
            selected: false,
            expanded: false,
          }
        ],
        selected: false,
        expanded: false,
      },

    ] as BasicTreeItemInterface[]);
  }

}
