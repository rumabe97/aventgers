import {IHero} from "./hero";

export interface IList {
    results: IHero[];
    count: number;
    limit: number;
    offset: number;
    total: number;
}