import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {BasicItemInterface} from '@app-classes/basic-item.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @ContentChild(TemplateRef)
  contentTemplate: TemplateRef<any>;

  itemsList: BasicItemInterface[];

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set items(items: BasicItemInterface[]) {
    this.itemsList = [...items];
  }

}
