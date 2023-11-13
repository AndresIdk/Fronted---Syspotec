import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { DBAssignedInterface } from '@core/models/db_assigned.interface';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignedService {

  private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public createAssignedTicket(assigned: DBAssignedInterface) {
    return this.httpClient.post(`${this.url}/Assigned`, assigned).pipe(
      catchError((err) => {
        console.log('Error: ', err);
        return of(err);
      })
    );
  }

  getAssignedTicketsByID(id: string) {
    return this.httpClient.get(`${this.url}/Assigned/${id}`).pipe(
      catchError((err) => {
        console.log('Error: ', err);
        return of(err);
      })
    );
  }

  updateAssignedTicket(id: number, body: any) {
    const assigned = {
      id_ticket: body.id_ticket,
      iD_status: body.iD_status,
      date: body.date,
      nit: body.nit
    };

    return this.httpClient.put(`${this.url}/Assigned/${id}`, assigned).pipe(
      catchError((err) => {
        console.log('Error: ', err);
        return of(err);
      })
    );
  }
  
}
