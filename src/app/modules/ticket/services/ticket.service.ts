import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketInterface } from '@core/models/ticket.interface';
import { environment } from '../../../../../environment/environment';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  createTicket(ticket: TicketInterface){
    return this.httpClient.post(`${this.url}/Ticket`, ticket).pipe(
      catchError((err) => {
        console.log('Error: ',err);
        return of(err);
      })
    );
  }

  getTicket(id:string){
    return this.httpClient.get(`${this.url}/Ticket/${id}`).pipe(
      catchError((err) => {
        console.log('Error: ',err);
        return of(err);
      })
    );
  }

  deleteTicket(id:number){
    return this.httpClient.delete(`${this.url}/Ticket/${id}`).pipe(
      catchError((err) => {
        console.log('Error: ',err);
        return of(err);
      })
    );
  }

  updateTicket(id:number, body:any){
    const ticket = {
      description: body.description,
      priority: body.priority,
    };
    
    return this.httpClient.put(`${this.url}/Ticket/${id}`, ticket).pipe(
      catchError((err) => {
        console.log('Error: ',err);
        return of(err);
      })
    );
  }

  
}
