import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/pages/home/home.component';
// import { AuthGuardService } from './helpers';

const accountModule = () => import('./modules/account/account.module').then(x => x.AccountModule);
const pagesModule = () => import('./modules/pages/pages.module').then(x => x.PagesModule);

const routes: Routes = [
    // { 
        // path: '', 
        // component: HomeComponent, 
        // canActivate: [AuthGuardService] 
    // },
    { 
        path: '', 
        loadChildren: pagesModule, 
        // canActivate: [AuthGuardService] 
    },
    { 
        path: 'account', 
        loadChildren: accountModule 
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }