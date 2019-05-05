import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @ContentChild(TemplateRef)
  contentTemplate: TemplateRef<any>;

  itemsList: any[];

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set items(items: any[]) {
    this.itemsList = [...items];
  }

}
