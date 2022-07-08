import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IList} from "../../../shared/entities/list";
import {MarvelService} from "../../../core/services/marvel/marvel.service";

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
    data!: IList;

    constructor(private _route: ActivatedRoute, private _marvelService: MarvelService) {
    }

    ngOnInit(): void {
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
}
