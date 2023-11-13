import { Injectable, inject } from '@angular/core'
import { CanActivateFn, Router } from  '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Injectable()
export class ValidateSessionService {
   private cookie?: string | null = this.cookieService.get('state');
   
   constructor(private router: Router, private cookieService: CookieService) {
       router = this.router;
   }

   canActivate(): boolean {
       return this.checkCookie();
   }

   private checkCookie(): boolean {
    //    console.log('🍷🍷', this.cookie);

       if (!this.cookie) {
            this.router.navigate(['/user/login']);
            return false;
       }return true;
   }
}

export const validateSessionGuard: CanActivateFn = (route, state) => {

 return inject(ValidateSessionService).canActivate();
};
