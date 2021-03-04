import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from './helpers';

// const accountModule = () => import('./modules/account/account.module').then(x => x.AccountModule);
const pagesModule = () => import('./pages/pages.module').then(x => x.PagesModule);

const routes: Routes = [
    { 
        path: '', 
        loadChildren: pagesModule, 
        // canActivate: [AuthGuardService] 
    },
    // { 
    //     path: 'account', 
    //     loadChildren: accountModule 
    // },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }