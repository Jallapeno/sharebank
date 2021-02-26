import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from '../../layouts/content/content.component';
import { HomeComponent } from './home/home.component';
import { InvestmentsComponent } from './investments/investments.component';
import { RescueComponent } from './rescue/rescue.component';

const routes: Routes = [
    {
        path: '', component: ContentComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'investments', component: InvestmentsComponent },
            { path: 'rescue', component: RescueComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }