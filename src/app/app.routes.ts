import { Routes } from '@angular/router';
import { Page404Component } from '@shared/page404/components/page404/page404.component';

export const routes: Routes = [
    {
        path: 'ticket',
        loadChildren: () => import('@modules/ticket/ticket.module').then(m => m.TicketModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule)
    },
    {
        path: '**',
        component: Page404Component
    }
];
