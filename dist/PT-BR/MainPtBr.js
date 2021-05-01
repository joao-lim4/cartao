import DefautlCards from './catoes-pt-br/cartoes-pt-br.js';



export default class MainPTBR {
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
            nR.push(this._priveteDefineBandeiraArray(this._removeMasckUnicValue(v,i)));
        });

        return nR;
    }

    _priveteDefineBandeiraArray(CardObject){
        for(let i = 0; i < this.objectBandeiras.cards.elo.in.length;i++){
            if(String(CardObject.substringln).indexOf(String(this.objectBandeiras.cards.elo.in[i])) != -1){
                return {
                    success: true,
                    dataValue: CardObject.stringFull,
                    mask: {
                        active: false,
                        valueOffMask: CardObject.string,
                    },
                    typeOfbandeira: 'Elo',
                    ObjectDataBandeira: this.objectBandeiras.cards.elo
                }
            }
        }

        switch (CardObject.substringIn) {
            case '5':
                return {
                    success: true,
                    dataValue: CardObject.stringFull,
                    mask: {
                        active: false,
                        valueOffMask: CardObject.string,
                    },
                    typeOfbandeira: 'MasterCard',
                    ObjectDataBandeira: this.objectBandeiras.cards.masterCard
                };
            case '4':
                return {
                    success: true,
                    dataValue: CardObject.stringFull,
                    mask: {
                        active: false,
                        valueOffMask: CardObject.string,
                    },
                    typeOfbandeira: 'Visa',
                    ObjectDataBandeira: this.objectBandeiras.cards.visa
                };
            default:
                return {
                    success: false,
                    bandeira: 'Não identificada',
                    erros: undefined,
                    message: "Verifique o valores passado para a função. Valores aceitos: String or Array"
                };
        }


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
            let objectSet = this._priveteDefineBandeiraArray(this._removeMasckUnicValue(v,'String || Single value'));
           
            objectSet.encode = {
                encode: false,
                type: 'url',
                image: {
                    url: `http://api-bfs.worktab.com.br/assets/bandeiras/${objectSet.typeOfbandeira == 'Elo' ? 'elo' : objectSet.typeOfbandeira == 'Visa' ? 'visa' : 'master'}.png` ,
                } 
            }
            
            return objectSet;
            
        }else{
            let nR = [];
            v.forEach((v,i) => {
                let res = (this._priveteDefineBandeiraArray(this._removeMasckUnicValue(v,i)));
            
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