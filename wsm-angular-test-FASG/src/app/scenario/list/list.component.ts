import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WSMService } from 'src/app/services/wsm.service';

import { apiList } from 'src/app/interfaces/apiList';
import { apiListContent } from 'src/app/interfaces/apiListContent';
import { apiListActions } from 'src/app/interfaces/apiListContentActions';
import { apiListContentActionsVariants } from 'src/app/interfaces/apiListContentActionVariants';

import {ThemePalette} from '@angular/material/core';
import { FormControl } from '@angular/forms';


export let checkBox = new FormControl(false);


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

  @Output() newItemEvent = new EventEmitter<boolean>();

  checkBox = new FormControl(false);

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

  checkClick(): void{
    let y = 0;

    this.apiActions.forEach(x => {
      if (x.checked) {
        y++;
      }
    });

    if (y >= 1) {
      this.newItemEvent.emit(true);
    } else {
      this.newItemEvent.emit(false);
    }
  }
}
