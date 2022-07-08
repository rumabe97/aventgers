import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {HeroesListResolver} from "../../core/resolvers/heroes-list.resolver";

const routes: Routes = [
    {
        path: '',
        component: HeroesListComponent,
        resolve: {response: HeroesListResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule {
}
