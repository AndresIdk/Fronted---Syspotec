import { Injectable, inject } from '@angular/core'
import { CanActivateFn, Router } from  '@angular/router'
import { CookieService } from 'ngx-cookie';

@Injectable()
export class ValidateSessionService {
//    private cookie?: string | null = this.cookieService.get('token');
   private cookie?: string | null = 'hola';
//    constructor(private router: Router, private cookieService: CookieService) {
//        router = this.router;
//    }
   constructor(private router: Router) {
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
