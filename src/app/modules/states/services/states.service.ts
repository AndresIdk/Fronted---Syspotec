import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private url = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  getStates(){
    return this.httpClient.get(`${this.url}/State`);
  }

  getStateById(id:string){
    return this.httpClient.get(`${this.url}/State/${id}`);
  }
}
