import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [HeaderComponent, HeroCardComponent, LoaderComponent, MenuComponent],
    imports: [
        CommonModule
    ],
    exports: [HeaderComponent, CommonModule, HttpClientModule, HeroCardComponent, LoaderComponent,MenuComponent,RouterModule]
})
export class SharedModule {
}
