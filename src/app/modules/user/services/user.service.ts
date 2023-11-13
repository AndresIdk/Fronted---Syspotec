import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, tap, of, catchError } from 'rxjs';
import { environment } from '../../../../../environment/environment';
import { AuthInterface } from '@core/models/auth.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiUrl;
  constructor(private httpClient:HttpClient, private cookieService: CookieService) { }

  submitLogin(credentials: AuthInterface):Observable<any>{

    this.cookieService.set('nit', (credentials.nit).toString(),{
      expires: 1,
      path: '/'
    });
    return this.httpClient.post(`${this.url}/User/auth`, credentials).pipe(
      tap((data:any) => {
          this.cookieService.set('state', data.status,{
            expires: 1,
            path: '/'
          });
      }),
      catchError((err) => {
        console.log('Error: ',err);
        return of(err);
      })
    )
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

  getUser(id:string){
    return this.httpClient.get(`${this.url}/User/${id}`).pipe(
      catchError((err) => {
        console.log('Error: ',err);
        return of(err);
      })
    );
  }


}
