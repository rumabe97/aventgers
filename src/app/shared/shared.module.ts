import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
    declarations: [HeaderComponent, HeroCardComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [HeaderComponent, CommonModule, AppRoutingModule, HttpClientModule, HeroCardComponent]
})
export class SharedModule {
}
