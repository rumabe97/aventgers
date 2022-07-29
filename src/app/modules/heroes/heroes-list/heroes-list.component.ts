import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IList} from "../../../shared/entities/list";
import {MarvelService} from "../../../core/services/marvel/marvel.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Subject, switchMap} from "rxjs";

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
    data!: IList;
    search: FormGroup
    searchValue: string = '';

    scroll: boolean = false;
    query: any = {};

    private reactionsTrigger$ = new Subject<void>();

    constructor(private _route: ActivatedRoute, private _marvelService: MarvelService) {
    }


    ngOnInit(): void {
        this.data = this._route.snapshot.data['response'];
        this.initSubject();
        this.initSearchGroup();
    }

    initSearchGroup() {
        this.search = new FormGroup({
            inputSearch: new FormControl()
        });
        this.search.controls['inputSearch'].valueChanges.subscribe(value => {
            this.searchValue = value;
            this.query = {offset: 0};
            if (this.searchValue) this.query['nameStartsWith'] = this.searchValue;
            this.scroll = false;
            this.reactionsTrigger$.next();
        })
    }

    private initSubject(): void {
        this.reactionsTrigger$.pipe(
            switchMap(() => this._marvelService.getAllHeroes(this.query)),
        ).subscribe(value => this.data = {
            ...value,
            results: this.scroll ? this.data.results.concat(value.results) : value.results
        });

    }

    onScroll(event: any) {
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            this.query = {offset: this.data.offset + 20};
            if (this.searchValue) this.query['nameStartsWith'] = this.searchValue;
            this.scroll = true;
            this.reactionsTrigger$.next();
        }
    }
}
