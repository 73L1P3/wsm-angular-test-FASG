import { Component, OnInit } from '@angular/core';
import { WSMService } from 'src/app/services/wsm.service';

import { apiList } from 'src/app/interfaces/apiList';
import { apiListContent } from 'src/app/interfaces/apiListContent';
import { apiListActions } from 'src/app/interfaces/apiListContentActions';
import { apiListContentActionsVariants } from 'src/app/interfaces/apiListContentActionVariants';

import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  List: apiList[] = [];
  apiContent: apiListContent[] = [];
  apiActions: apiListActions[] = [];
  actionsVariants: apiListContentActionsVariants[] = [];

  instructions: boolean = false;
  optimization: boolean = false;

  panelOpenState = false;
  MatTabBodyPositionState = 'left';

  constructor(private wsmService: WSMService) { }

  ngOnInit(): void {  
    this.wsmService.getItems().subscribe(
      data => {
        this.List = data;
      }
    )
  }

  showContent(content: any): void {
    this.apiContent = content.itemVariants;

    this.apiActions = content?.actions;

    this.instructions = true;
    this.optimization = true;

    if(this.apiActions) {
      const variantsObject: any = this.apiActions;

      variantsObject.forEach((object: any) => {
        this.actionsVariants = object.actionVariants;
        object.actionVariants = this.actionsVariants;
      });
    }
  }


  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
}
