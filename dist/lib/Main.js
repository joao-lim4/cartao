import DefautlCards from './cards/cartoes-pt-br.js';
import ValidateToRegex from '../utils/ValidateToRegex.js'


export default class Main {
    constructor(numeros=null){
        this._numberParse = String(numeros).split(' ');
        this._fullValue = {
            full: numeros,
            set FullValue(param){
                if(typeof this.full === 'object'){
                    this.full = [...numeros];
                }else{
                    this.full = [this.full];
                }
            }
        }; 
        this._infosStringOfMask = '';
        this.objectBandeiras = {
            cards: {},
            set UpdateCards(df){
                if(typeof df === 'object'){
                    this.cards = df;
                }
            }
        }
        this.objectBandeiras.UpdateCards = DefautlCards.DefautlCards;
        
    }

    _checkBandeira(){
        this._fullValue.FullValue = false;

        let nR = [];
        this._fullValue.full.forEach((v,i) => {
            nR.push(this._privateDefineBandeira(this._removeMasckUnicValue(v,i)));
        });

        return nR;
    }

    _privateDefineBandeira(CardObject){
        
        const regexValidate = ValidateToRegex(CardObject.string, 'br');
        
        if(regexValidate.value){
            return {
                success: true,
                dataValue: CardObject.stringFull,
                mask: {
                    active: false,
                    valueOffMask: CardObject.string,
                },
                typeOfbandeira: regexValidate.bandeira,
                ObjectDataBandeira: this.objectBandeiras.cards[`${regexValidate.bandeira}`]
            };
        }

        return {
            error: true,
            bandeira: 'Não identificada',
            message: "Verifique o valores passado para a função. Valores aceitos: String or Array"
        };
    
    }

    _removeMasckUnicValue(m,i){
        let nV = '';
        String(m).split(' ').forEach(s => {
            nV = nV + s;
        })

        return {
            string: nV,
            stringFull: m,
            indice: i,
            mask: false,
            length: nV.length,
            substringln: String(nV.substring(0,6)),
            substringIn: String(nV.substring(0,1))
        };
    }

    _checkBandeiraToImage(v){
        if(typeof v === 'string'){
            let objectSet = this._privateDefineBandeira(this._removeMasckUnicValue(v,'String || Single value'));
           
            objectSet.encode = {
                encode: false,
                type: 'url',
                image: {
                    url: `http://api-bfs.worktab.com.br/assets/bandeiras/${objectSet.typeOfbandeira == 'elo' ? 'elo' : objectSet.typeOfbandeira == 'visa' ? 'visa' : 'master'}.png` ,
                } 
            }
            
            return objectSet;
            
        }else{
            let nR = [];
            v.forEach((v,i) => {
                let res = (this._privateDefineBandeira(this._removeMasckUnicValue(v,i)));
            
                res.encode = {
                    encode: false,
                    type: 'url',
                    image: {
                        url: `http://api-bfs.worktab.com.br/assets/bandeiras/${res.typeOfbandeira == 'Elo' ? 'elo' : res.typeOfbandeira == 'Visa' ? 'visa' : 'master'}.png` ,
                    } 
                }
                nR.push(res);
                
            });

            return nR;
        }   
    }

}