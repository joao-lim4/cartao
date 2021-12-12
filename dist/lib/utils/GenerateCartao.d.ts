import { DataCard, ErrorMessage } from '../interfaces/GenerateCartao.interface';
declare class GenerateCartao {
    private _options;
    private _optionsInstace;
    private _initialState;
    constructor(options: any);
    _generateOptions(options: any): void;
    gerarCartao(type: string): DataCard | string | ErrorMessage;
    _generateNumber(ini: Array<string> | string): string;
    _generateMaks(num: string): string;
    _generateData(card: string, type: string): DataCard | string;
    _switchCards(type: string): DataCard | string | ErrorMessage;
}
export default GenerateCartao;
