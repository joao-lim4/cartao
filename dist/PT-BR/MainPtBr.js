import DefautlCards from './catoes-pt-br/cartoes-pt-br';
import {encode} from 'node-base64-image';


export default class MainPTBR {
    constructor(numeros=null){
        this._numberParse = String(numeros).split(' ');
        this._fullValue = numeros; 
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
        if(this._privateChecktypeValue(this._fullValue).type === 'String'){
            return this._privateDefineBandeira( this._removeMasck());
        }else{
            let nR = [];
            this._fullValue.forEach((v,i) => {
                nR.push(this._priveteDefineBandeiraArray(this._removeMasckUnicValue(v,i)));
            });

            return nR;
        }
       
        
    }

    _priveteDefineBandeiraArray(v){

        for(let i = 0; i < this.objectBandeiras.cards.elo.in.length;i++){
            if(String(v.substringln).indexOf(String(this.objectBandeiras.cards.elo.in[i])) != -1){
                return {
                    success: true,
                    dataValue: v.stringFull,
                    mask: {
                        active: false,
                        valueOffMask: v.string,
                    },
                    typeOfbandeira: 'Elo',
                    ObjectDataBandeira: this.objectBandeiras.cards.elo
                }
            }
        }

        switch (v.substringIn) {
            case '5':
                return {
                    success: true,
                    dataValue: v.stringFull,
                    mask: {
                        active: false,
                        valueOffMask: v.string,
                    },
                    typeOfbandeira: 'MasterCard',
                    ObjectDataBandeira: this.objectBandeiras.cards.masterCard
                };
            case '4':
                return {
                    success: true,
                    dataValue: v.stringFull,
                    mask: {
                        active: false,
                        valueOffMask: v.string,
                    },
                    typeOfbandeira: 'Visa',
                    ObjectDataBandeira: this.objectBandeiras.cards.visa
                };
            default:
                return {
                    success: false,
                    bandeira: 'Não identificada',
                    erros: undefined,
                    message: "Verifique o valos passado para a função. Valores aceitos: String or Array"
                };
        }


    }

    _privateDefineBandeira(object){
        if(typeof object === 'object'){

            for(let i = 0; i < this.objectBandeiras.cards.elo.in.length; i++){
                if(object.substringln.indexOf(String(this.objectBandeiras.cards.elo.in[i])) != -1){
                    return {
                        success: true,
                        valueData: this._fullValue,
                        bandeira: {
                            compact: true,
                            bandeira: 'Elo',
                            objectData: this.objectBandeiras.cards.elo
                        }
                    };
                }
            }

            if(object.substringIn == '5'){
                return {
                    success: true,
                    valueData: this._fullValue,
                    bandeira: {
                        compact: true,
                        bandeira: 'MasterCard',
                        objectData: this.objectBandeiras.cards.masterCard
                    }
                };
            }else if(object.substringIn == '4') { 
                return {
                    success: true,
                    valueData: this._fullValue,
                    bandeira: {
                        compact: true,
                        bandeira: 'Visa',
                        objectData: this.objectBandeiras.cards.visa
                    }
                };
            }else{
                return {
                    success: false,
                    bandeira: 'Não identificada',
                    erros: undefined,
                    message: "Verifique o valos passado para a função. Valores aceitos: String or Array"
                }
            }
        }
    }
    
    _removeMasck(){
        let __NewString = '';
        this._numberParse.forEach(s => {
            __NewString = __NewString + s;
        });

        return  {
            string: __NewString,
            mask: false,
            length: __NewString.length,
            substringln: String(__NewString.substring(0,5)),
            substringIn: String(__NewString.substring(0,1))
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
            substringln: String(nV.substring(0,5)),
            substringIn: String(nV.substring(0,1))
        };
    }

    _privateChecktypeValue(value){
        if(typeof value === 'string'){
            return {
                success: true,
                type: 'String',
            };
        };

        if(typeof value === 'object'){
            value.forEach((v,i) => {
                if(typeof v !== 'string'){
                    return {
                        error: true,
                        message: 'O valor passado dentro do array não é do tipo string',
                        espec: 'Posição do array com erro:' + i 
                    };
                }
            });

            return {
                success: true,
                type: 'Object Array',
            };
        }
    }

    _checkBandeiraToImage(v, url){
        if(typeof v === 'string'){
            let objectSet = this._privateDefineBandeira(this._removeMasckUnicValue(v,'String || Single value'));
            if(url){   
                objectSet.bandeira.encode = {
                    encode: false,
                    type: 'url',
                    image: {
                        url: `http://api-bfs.worktab.com.br/assets/bandeiras/${objectSet.bandeira.bandeira == 'Elo' ? 'elo' : objectSet.bandeira.bandeira == 'Visa' ? 'visa' : 'master'}.png` ,
                    } 
                }
                return objectSet;
            }
        }else{
            let nR = [];
            v.forEach((v,i) => {
                let res = (this._priveteDefineBandeiraArray(this._removeMasckUnicValue(v,i)));
                if(url){
                    res.encode = {
                        encode: false,
                        type: 'url',
                        image: {
                            url: `http://api-bfs.worktab.com.br/assets/bandeiras/${res.typeOfbandeira == 'Elo' ? 'elo' : res.typeOfbandeira == 'Visa' ? 'visa' : 'master'}.png` ,
                        } 
                    }
                    nR.push(res);
                }
            });

            return nR;
        }   
    }

}