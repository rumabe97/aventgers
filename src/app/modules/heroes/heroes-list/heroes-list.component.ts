import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IList} from "../../../shared/entities/list";
import {MarvelService} from "../../../core/services/marvel/marvel.service";
import {LoadingService} from "../../../core/services/loading/loading.service";
import {delay} from "rxjs";

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
    data!: IList;
    loading: boolean = false;

    constructor(private _route: ActivatedRoute, private _marvelService: MarvelService, private _loadingService: LoadingService) {
    }

    ngOnInit(): void {
        this.listenToLoading();
        this.data = this._route.snapshot.data['response'];
    }

    onScroll(event: any) {
        // visible height + pixel scrolled >= total height
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            this._marvelService.getAllHeroes({offset: this.data.offset + 20}).subscribe(value => {
                this.data = {
                    ...value,
                    results: this.data.results.concat(value.results)
                }
            })
        }
    }

    listenToLoading(): void {
        this._loadingService.loadingSub.pipe(delay(0)).subscribe((loading) => {
            this.loading = loading;
        })
    }
}
