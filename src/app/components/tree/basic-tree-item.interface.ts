export interface BasicTreeItemInterface {
  children: BasicTreeItemInterface[];
  selected: boolean;
  expanded: boolean;
  label: string;
}
