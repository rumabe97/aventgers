import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../services/loading/loading.service";
import {delay} from "rxjs";

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
    loading: boolean = false;

    constructor(private _loadingService: LoadingService) {
    }

    ngOnInit(): void {
        this.listenToLoading();
    }

    listenToLoading(): void {
        this._loadingService.loadingSub.pipe(delay(0)).subscribe((loading) => {
            this.loading = loading;
        })
    }
}
