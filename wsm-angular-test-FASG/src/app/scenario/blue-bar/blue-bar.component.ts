import { Component, OnInit, Input, Output, OnChanges, SimpleChanges} from '@angular/core';

import { CampaignService } from 'src/app/services/campaign.service';
import { campaignGroup } from 'src/app/interfaces/campaignGroup';
import { campaignDetails } from 'src/app/interfaces/campaignDetails';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blue-bar',
  templateUrl: './blue-bar.component.html',
  styleUrls: ['./blue-bar.component.scss']
})
export class BlueBarComponent implements OnInit, OnChanges {

  campaignGroup: campaignGroup[] = [];
  campaignDetails: campaignDetails[] = [];

  @Input() checkReceived: boolean = false;

  constructor(private campaignService: CampaignService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.checkReceived){
      console.log(this.checkReceived)
    }
  }

  ngOnInit(): void {
    this.campaignService.getCG().subscribe(
      group => {
        this.campaignGroup = group;
      }
    )

    this.campaignService.getCampaigns().subscribe(
      campaign => {
        this.campaignDetails = campaign;        
      }
    )

  }

}
