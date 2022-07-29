import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [HeroesListComponent],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ]
})
export class HeroesModule {
}
