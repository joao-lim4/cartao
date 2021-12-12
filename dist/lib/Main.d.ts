import RemoveMask from './interfaces/RemoveMask.interface';
import { Error, ValidateCard } from './interfaces/Main.interface';
declare class Main {
    private _fullValue;
    private objectBandeiras;
    constructor(numero?: string | Array<string>);
    private _getCardData;
    _checkBandeira(): Array<ValidateCard | Error>;
    _privateDefineBandeira(CardValue: RemoveMask): any;
    _removeMasckUnicValue(num: string, i: number | string): RemoveMask;
    _checkBandeiraToImage(value: string | Array<string>): any[];
}
export default Main;
