// import MainPTBR from './dist/PT-BR/MainPtBr';
// import GerarCartao from './dist/utils/GenerateCartao';

const MainPTBR = require('./dist/PT-BR/MainPtBr');
const GerarCartao = require('./dist/utils/GenerateCartao');

/**
 * Title checkBandeira
 * Descrição: Checar a qual bandeira pertence o cartão pertence, uma funçåo simples
 * 
 * @param number type String || Array 
 * @returns 
 */

const Cartoes = {
    ptBr: {
        checkBandeira: v => checkBandeira(v),
        checkBandeiraToImage: v => checkBandeiraToImage(v),
        gerarCartao: (type,options=null) => gerarCartao(type,options)
    }
};

const checkBandeira = (n) => {
    if(!n || n === 'undefined'){
        throw 'O valor passador é inválido, passae um argumanto do tipo string || um array de strings';
    }
    return new MainPTBR.default(n)._checkBandeira();
}

const checkBandeiraToImage = (n,image=true) => {
    if(!n || n === 'undefined'){
        throw 'O valor passador é inválido, passae um argumanto do tipo string || um array de strings';
    }
    return  new MainPTBR.default()._checkBandeiraToImage(n,image);
}

const gerarCartao = (type,options=null) => {
    if(!type || typeof type === 'undefined'){
        throw {
            error: true,
            message: 'Tipo do valor errado, parametros do tipo String || Array',
            params: [
                {TypeArray: ['Elo','Visa','MasterCard']},
                {TypeString: 'Elo'}
            ]
            
        }
    }
    return new GerarCartao.default(options).gerarCartao(type);
}

console.log(Cartoes.ptBr.gerarCartao('elo'))

export default Cartoes;