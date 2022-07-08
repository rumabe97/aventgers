import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IHero} from "../../../shared/entities/hero";

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
    data: IHero[] = [];
    count: number = 0;
    limit: number = 0;
    offset: number = 0;
    total: number = 0;

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.data = this._route.snapshot.data['response'].results;
        this.count = this._route.snapshot.data['response'].count;
        this.limit = this._route.snapshot.data['response'].limit;
        this.offset = this._route.snapshot.data['response'].offset;
        this.total = this._route.snapshot.data['response'].total;
    }

}
