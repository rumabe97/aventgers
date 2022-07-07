import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {MarvelService} from "../services/marvel/marvel.service";

@Injectable({
    providedIn: 'root'
})
export class HeroesListResolver implements Resolve<any> {
    constructor(private _marvelService: MarvelService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._marvelService.getAllHeroes({});
    }
}
