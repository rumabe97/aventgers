import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IList} from "../../../shared/entities/list";

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
    data!: IList;

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.data = this._route.snapshot.data['response'];
    }

}
