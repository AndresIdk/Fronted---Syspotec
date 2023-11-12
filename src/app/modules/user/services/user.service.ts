import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';
import { environment } from '../../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  submitLogin(credentials:{nit:number, password:string}):Observable<any>{
    return this.httpClient.post(`${this.url}/User/auth`, credentials);
  }
  
  public validateEmail():AsyncValidatorFn {
    return (control:AbstractControl): Observable<ValidationErrors | null> => {
      return of(control.value).pipe(
        delay(2000),
        map((email) => {
          const emails = ['hola@gmail.com', 'adios@gmail.com']
          return emails.includes(email) ? {emailExists: true} : null;
        })
      )
    }
  }


}
