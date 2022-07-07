import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [HeaderComponent, CommonModule,AppRoutingModule, HttpClientModule]
})
export class SharedModule {
}
