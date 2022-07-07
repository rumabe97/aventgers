import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {HeroesListComponent} from "./heroes-list/heroes-list.component";


@NgModule({
    declarations: [HeroesListComponent],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        SharedModule,
    ]
})
export class HeroesModule {
}
