import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {Md5} from "ts-md5";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private token = environment.apiKey;
    private privateKey = environment.privateKey;

    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const hash = new Md5();
        hash.appendStr(new Date().getTime() + this.privateKey + this.token);
        const newReq = request.clone({
            params: request.params.set('ts', new Date().getTime()).set('apikey', this.token).set('hash', hash.end() as string)
        });

        return next.handle(newReq);
    }
}
