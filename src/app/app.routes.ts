import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { GooglemapComponent } from './googlemap/googlemap.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'maps', component: GooglemapComponent },
    { path: '**', component: HomeComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
