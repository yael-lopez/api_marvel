import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorComicComponent } from './heroe/pages/por-comic/por-comic.component';
import { PorHereoComponent } from './heroe/pages/por-hereo/por-hereo.component';
import { PorHistoriaComponent } from './heroe/pages/por-historia/por-historia.component';
import { VerHereoComponent } from './heroe/pages/ver-hereo/ver-hereo.component';

const routes: Routes = [
    {
        path: '',
        component: PorHereoComponent,
        pathMatch: 'full'
    },
    {
        path: 'comic',
        component: PorComicComponent
    },
    {
        path: 'series',
        component: PorHistoriaComponent
    },
    {
        path: 'heroe/:id',
        component: VerHereoComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}