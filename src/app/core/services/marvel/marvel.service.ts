import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {_clean} from "../../../shared/utils";
import {map} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MarvelService {

    url = environment.url;

    constructor(private _http: HttpClient) {
    }

    getAllHeroes(query: any) {
        return this._http.get<any>(`${this.url}characters`, {params: new HttpParams({fromObject: _clean(query)})})
            .pipe(map(value => value.data))
    }
}
