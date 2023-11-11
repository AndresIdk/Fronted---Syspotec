import { Injectable, inject } from '@angular/core'
import { CanActivateFn, Router } from  '@angular/router'

@Injectable()
export class ValidateSessionService {
   private cookie: string | null = null;

   constructor(private router: Router) {
       router = this.router;
   }

   canActivate(): boolean {
       return this.checkCookie();
   }

   private checkCookie(): boolean {
       console.log('🍷🍷', this.cookie);

       if (this.cookie != null) {
           return true;
       } else {
          this.router.navigate(['/auth/login']);
           return false;
       }
   }
   }

export const validateSessionGuard: CanActivateFn = (route, state) => {

 return inject(ValidateSessionService).canActivate();
};
