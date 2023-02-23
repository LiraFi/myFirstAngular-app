import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { AreasList } from '../areas';

@Component({
  selector: 'mfa-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreasListComponent implements OnInit, OnChanges {
  @Input() regions: AreasList[] = [];

  @Input() tableTitle: string = '';

  @Output() selectedArea = new EventEmitter<AreasList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    console.log(changes);
    if (changes['tableTitle']) {
      this.tableTitle = changes['tableTitle'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  selectArea(area: AreasList) {
    this.selectedArea.emit(area);
  }
}
