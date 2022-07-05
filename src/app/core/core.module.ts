import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    exports: [
        MainLayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule
    ]
})
export class CoreModule {
}
