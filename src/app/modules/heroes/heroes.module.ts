import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        SharedModule,
        CoreModule
    ]
})
export class HeroesModule {
}
