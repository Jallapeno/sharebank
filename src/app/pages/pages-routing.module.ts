import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from './helpers';

import { ContentComponent } from '../layouts/content/content.component';
import { FullComponent } from '../layouts/full/full.component';

import { HomeComponent } from './home/home.component';
import { InvestmentsComponent } from './investments/investments.component';
import { RescueComponent } from './rescue/rescue.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
    {
        path: '', 
        component: ContentComponent, 
        // canActivate: [AuthGuardService] 
        children: [
            { 
                path: '', 
                component: HomeComponent,
            },
            { 
                path: 'investments', 
                component: InvestmentsComponent,
            },
            { 
                path: 'rescue', 
                component: RescueComponent,
            },
        ]
    },
    {
        path: 'authenticate', 
        component: FullComponent,
        children: [
            { 
                path: '', 
                component: LoginComponent,
            },
            { 
                path: 'login', 
                component: LoginComponent,
            },
            { 
                path: 'register', 
                component: RegisterComponent
            },
            { 
                path: 'forgot', 
                component: ForgotComponent
            },
            { path: '**', redirectTo: 'login' }
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }