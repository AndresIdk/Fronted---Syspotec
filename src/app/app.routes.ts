import { Routes } from '@angular/router';

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
