import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisplayGrid, GridType, GridsterConfig, GridsterItem }  from 'angular-gridster2';

@Component({
  selector: 'app-gridster-test',
  templateUrl: './gridster-test.component.html',
  styleUrls: ['./gridster-test.component.scss'],
})

export class GridsterTestComponent {
  
  options!: GridsterConfig;

  @Input()
  dashboard: Array<GridsterItem> = [];
  
  @Output() 
  newItemEvent = new EventEmitter<string>();

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: GridsterTestComponent.itemChange,
      itemResizeCallback: GridsterTestComponent.itemResize,
      draggable: {
        enabled: true
      },
      displayGrid: DisplayGrid.OnDragAndResize,
      fixedColWidth: 150,
      fixedRowHeight: 150,
      minCols:10,
      maxCols: 100,
      minRows: 10,
      maxRows: 100,
      resizable: {
        enabled: true
      },
      gridType: GridType.ScrollHorizontal,
      swap: false,
      pushItems: true,
      mobileBreakpoint: 0,
      useBodyForBreakpoint: true
    };
  }

  changedOptions() {
    if (this.options.api?.optionsChanged != undefined) {
      this.options.api.optionsChanged();
    }
  }

  removeItem(item: GridsterItem) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
    this.newItemEvent.emit(item["label"]);
  }

  addItem(value:string) {
    this.dashboard.push({
      x: 0,
      y: 0,
      rows: 2,
      cols: 2,
      label: value,
      hasContent: true,
    });
  }
}