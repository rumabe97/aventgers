import {IGeneric} from "./generic";
import {IThumbnail} from "./thumbnail";
import {IUrl} from "./url";

export interface IHero {
    id: string;
    name: string;
    description: string;
    modified: string;
    comics: IGeneric;
    events: IGeneric;
    series: IGeneric;
    stories: IGeneric;
    thumbnail: IThumbnail;
    urls: IUrl[];
}