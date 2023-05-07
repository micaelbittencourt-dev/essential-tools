import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridsterItem } from 'angular-gridster2';
import { CreateAndEditCardComponent } from './dialogs/create-and-edit-card/create-and-edit-card.component';

@Component({
  selector: 'app-panel-cards',
  templateUrl: './panel-cards.component.html',
  styleUrls: ['./panel-cards.component.scss']
})
export class PanelCardsComponent {
  warLoc: string[] = [];
  dashboard: Array<GridsterItem> = [];

  constructor(public dialog: MatDialog) {}
  
  add(item: string) {
    this.warLoc.push(`ARM/LOC${item}`);

  }

  restoreItem(value: string) {
    this.warLoc.push(value);
  }

  drop(event: any) {
    let res = this.warLoc.find((value, index) => index === event.previousIndex ? value : null);
    console.log(res);
    if (res) {
      this.dashboard.push({
        x: 0,
        y: 0,
        rows: 2,
        cols: 2,
        label: res,
        hasContent: true
      });
      this.warLoc.splice(event.previousIndex, 1);
    }
  }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateAndEditCardComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed '+result);
      this.warLoc.push(result);
    });
  }
}