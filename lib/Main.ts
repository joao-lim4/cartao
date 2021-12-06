import DefaultCards from './cards/cartoes-pt-br';
import RemoveMask from './interfaces/RemoveMask.interface';
import ValidateToRegex from './utils/ValidateToRegex';
import { Error, ValidateCard, DefaultCardsObject } from './interfaces/Main.interface';
import { replaceCardNumber } from './utils/ReplaceCardNumber';

class Main{
    private _fullValue: Array<string> = [];
    private objectBandeiras: DefaultCardsObject = DefaultCards.DefautlCards;
    
    constructor(numero?: string | Array<string>){
        if(numero){
            this._fullValue = typeof numero === 'object' ? [...numero.map((num) => {
                return replaceCardNumber(num);
            })] : [ replaceCardNumber(numero) ];
        }
    }

    private _getCardData(type: string){
        switch (type){
            case 'elo':
                return this.objectBandeiras.elo;
            case 'visa':
                return this.objectBandeiras.visa;
            case 'mastercard':
                return this.objectBandeiras.mastercard;
            default:
                return {in: [], bandeira: ''}
        }
    }

    _checkBandeira():Array<ValidateCard | Error>{
        let nR:Array<any> = [];

        if(typeof this._fullValue !== 'undefined'){
            this._fullValue.forEach((v,i) => {
                nR.push(this._privateDefineBandeira(this._removeMasckUnicValue(v,i)));
            });
        }

        return nR;
    }

    _privateDefineBandeira(CardValue: RemoveMask): any{
        const regexValidate = ValidateToRegex(CardValue.string, 'br');
        
        if(regexValidate.value){
            return {
                success: true,
                dataValue: CardValue.stringFull,
                mask: {
                    active: false,
                    valueOffMask: CardValue.string,
                },
                typeOfbandeira: regexValidate.bandeira,
                ObjectDataBandeira: this._getCardData(regexValidate.bandeira)
            };
        }

        return {
            error: true,
            bandeira: 'Não identificada',
            message: "Verifique o valores passado para a função. Valores aceitos: String or Array"
        };
    }

    _removeMasckUnicValue(num: string, i: number | string): RemoveMask{
        let newValue: string = '';
        
        num.split(' ').forEach(s => {
            newValue = newValue + s;
        })

        return {
            string: newValue,
            stringFull: num,
            indice: i,
            mask: false,
            length: newValue.length,
            substringln: String(newValue.substring(0,6)),
            substringIn: String(newValue.substring(0,1))
        };
    }

    _checkBandeiraToImage(value:string | Array<string>){
        value = typeof value === 'object' ? [...value.map((num) => {
            return replaceCardNumber(num);
        })] : [ replaceCardNumber(value) ];

        let newArray: any[] = [];

        value.forEach((v,i) => {
            let objectSet = this._privateDefineBandeira(this._removeMasckUnicValue(v,i));
            if(objectSet.success){
                newArray.push({
                    ...objectSet,
                    encode: {
                        encode: true,
                        type: 'url',
                        image: {
                            url: `http://api-bfs.worktab.com.br/assets/bandeiras/${objectSet.typeOfbandeira == 'elo' ? 'elo' : objectSet.typeOfbandeira == 'visa' ? 'visa' : 'master'}.png` ,
                        }
                    }
                })
            }else{
                newArray.push(objectSet);
            }
        });

        return newArray;
    }
}

export default Main;