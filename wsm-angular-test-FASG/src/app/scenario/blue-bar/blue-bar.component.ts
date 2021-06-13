import { Component, OnInit } from '@angular/core';

import { CampaignService } from 'src/app/services/campaign.service';
import { campaignGroup } from 'src/app/interfaces/campaignGroup';
import { campaignDetails } from 'src/app/interfaces/campaignDetails';

@Component({
  selector: 'app-blue-bar',
  templateUrl: './blue-bar.component.html',
  styleUrls: ['./blue-bar.component.scss']
})
export class BlueBarComponent implements OnInit {

  campaignGroup: campaignGroup[] = [];
  campaignDetails: campaignDetails[] = [];

  currentCampaign: campaignDetails[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getCG().subscribe(
      group => {
        this.campaignGroup = group;
      }
    )

    this.campaignService.getCampaigns().subscribe(
      campaign => {
        this.currentCampaign = campaign;
        console.log(this.currentCampaign[1])
      }
    )
  }

}
