import Cards from '../PT-BR/catoes-pt-br/cartoes-pt-br';

export default class GenerateCartao {

    constructor(options = null){
        this._options = {
            image: true,
            mask: true,
            fullData: true,
            singleNumber: false,
        };
        this._initialState = this._options;

        if(options){
            this._optionsInstace = true;
            for(let prop in options){
                let res = this._generateOptions(options[prop], prop);
                if(!res){
                    break;
                }
            }
        }
    }

    _generateOptions(valueOfOptions,keyOfOptions){
        if(keyOfOptions == 'singleNumber' && valueOfOptions){
            for(let key in this._options){
                key != 'singleNumber' ? this._options[key] = !true : this._options[key] = !false;
            }
            return false;
        }else{
            this._options[keyOfOptions] = valueOfOptions != this._options[keyOfOptions] ? valueOfOptions : this._initialState[keyOfOptions];
            return true;
        }
    }

    gerarCartao(type){
        if(this._optionsInstace){
                
            switch (type) {
                case 'Elo':
                    let res = this._generateNumber(Cards.DefautlCards.elo.in);
                    break;
                case 'MasterCard': 
                    let res = this._generateNumber(Cards.DefautlCards.masterCard.in);
                    break;
                case 'Visa':
                    let res = this._generateNumber(Cards.DefautlCards.elo.in);
                    break; 
                default:
                    return {
                        error: true,
                        message: "Informe um tipo de bandeira valido, format |String| ex: Elo, MasterCard ou Visa"
                    };
            }
            
            return type;
        }else{
            return type;
        }
        
    }


    _generateNumber(in){

    }

}