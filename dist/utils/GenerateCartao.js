import Cards from '../PT-BR/catoes-pt-br/cartoes-pt-br';

export default class GenerateCartao {

    constructor(options){
        this._options = options;
    }

    gerarCartao(type){
        if(this._options){
            console.log(Cards);
            return type;
        }else{
            return type;
        }
        
    }
}