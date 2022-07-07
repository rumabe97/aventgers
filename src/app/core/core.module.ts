import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {SharedModule} from "../shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";


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
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
}
