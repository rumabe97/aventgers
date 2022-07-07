import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HeroesModule} from "./modules/heroes/heroes.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HeroesModule,
        CoreModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
