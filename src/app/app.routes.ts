import { Routes } from '@angular/router';
import { Page404Component } from '@shared/modules/page404/components/page404/page404.component';

export const routes: Routes = [
    {
        path: 'ticket',
        loadChildren: () => import('@modules/ticket/ticket.module').then(m => m.TicketModule)
    },
    {
        path: 'user',
        loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule)
    },
    {
        path: '**',
        redirectTo: '/user/dashboard',
        // component: Page404Component
    }
];
