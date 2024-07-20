import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
  
})
export class MainViewComponent {

  board: Board = new Board('test Board', [
    new Column('Backlog', [
      "row 1",
      "Rio",
      "Ryan Gosling"
    ]),
    new Column('Desenvolvimento', [
      "row 2",
      "Rome",
      "Ryan Reynolds"
    ]),
    new Column('Validação', [
      "Ruby on rails",
      "Riverdale",
      "Rose o Donell"
    ]),
    new Column('Deploy', [
      "Rust",
      "Russia",
      "Ronald Reagan"
    ])
  ]);
ngOnInit(){

}

  //todo = ['*', '**', '***', '****', '*****']
  //done = ['abc', '123', '@#$']


  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else{ 
      transferArrayItem(
        event.container.data,
        event.previousContainer.data,
        event.currentIndex,
        event.previousIndex

      )

    }
  }
}
