import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from "./shared/components/menu/menu.component";

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: []
    },
    {
        path: 'heroes',
        loadChildren: () => import('./modules/heroes/heroes.module').then(mod => mod.HeroesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
