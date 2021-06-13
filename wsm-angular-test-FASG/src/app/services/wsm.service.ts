import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WSMService {

  private apiUrl = 'https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/items/';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
