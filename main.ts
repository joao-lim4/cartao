import { Error, ValidateCard, ValidateObject } from './lib/interfaces/Main.interface';
import Main from './lib/Main';
import ValidateToRegex from './lib/utils/ValidateToRegex';
import GenerateCartao from './lib/utils/GenerateCartao';
import { OptionDefault, DataCard, ErrorMessage  } from './lib/interfaces/GenerateCartao.interface';

const Validate: ValidateObject = {
    checkBandeira: (value:string | Array<string>) => checkBandeira(value),
    checkBandeiraToImage:  (value: string | Array<string>) => checkBandeiraToImage(value),
    chekcBandeiraToRegex: (value: string, type: string) => chekcBandeiraToRegex(value, type),
    gerarCartao: (type:string, options:OptionDefault) => gerarCartao(type,options)
}

const checkBandeira = (value:string | Array<string>):Array<ValidateCard | Error> => {
    return new Main(value)._checkBandeira();
}

const checkBandeiraToImage = (value:string | Array<string>) => {
    return new Main()._checkBandeiraToImage(value);
}

const chekcBandeiraToRegex = (value:string,type:string='br') => {
    return ValidateToRegex(value, type);
}

const gerarCartao = (type:string, options:OptionDefault): DataCard | ErrorMessage | string => {
    return new GenerateCartao(options).gerarCartao(type);
}

export default Validate;