import {Component, OnInit} from '@angular/core';
import {navItems} from "./config";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navItems = navItems;
    activeItem: string = '';

    constructor(private _route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit(): void {
        this.activeItem = this._router.url === '/' ? 'Heroes' : this._router.url;
    }

    navigate(item: any) {
        this.activeItem = item?.name;
    }
}
