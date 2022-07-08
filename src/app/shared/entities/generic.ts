import {IITem} from "./items";

export interface IGeneric {
    available: number;
    collectionURI: string;
    returned: number;
    items: IITem[];
}