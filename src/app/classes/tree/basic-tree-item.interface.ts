import {BasicItemInterface} from '../basic-item.interface';

export interface BasicTreeItemInterface extends BasicItemInterface {
  children: BasicTreeItemInterface[];
  selected: boolean;
  expanded: boolean;
}
