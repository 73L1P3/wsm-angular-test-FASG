import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private cgApi = "https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/campaign-groups/?id=1";
  private campaignsApi = "https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/campaigns/";

  constructor(private http: HttpClient) { }

  getCG(): Observable<any> {
    return this.http.get<any>(this.cgApi);
  }

  getCampaigns(): Observable<any> {
    return this.http.get<any>(this.campaignsApi);
  }
}
