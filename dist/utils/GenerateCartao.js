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
            options.every((v,k,i) => {
                console.log('value ' + v)
                console.log('key', + k)
                // let res = this._generateOptions(v,k,i);
                // if(!res){
                //     break;
                // }
            });
        }
    }

    _generateOptions(valueOfOptions,keyOfOptions){

        if(keyOfOptions == 'singleNumber' && valueOfOptions){
            this._options = this._initialState;
            return false;
        }else{
            this._options[keyOfOptions] = valueOfOptions != valueOfThisOptiosn ? valueOfOptions : this._initialState[keyOfOptions];
            return true;
        }
    }

    gerarCartao(type){
        if(this._optionsInstace){
            console.log(Cards);
            return type;
        }else{
            return type;
        }
        
    }
}