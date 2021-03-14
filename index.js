import MainPTBR from './dist/PT-BR/MainPtBr';
import GerarCartao from './dist/utils/GenerateCartao';

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
    }
}

const checkBandeira = (n) => {
    if(!n || n === 'undefined'){
        return 'O valor passador é inválido, passae um argumanto do tipo string || um array de strings';
    }
    return new MainPTBR(n)._checkBandeira();
}

const checkBandeiraToImage = (n,image=true) => {
    if(!n || n === 'undefined'){
        return 'O valor passador é inválido, passae um argumanto do tipo string || um array de strings';
    }
    return  new MainPTBR()._checkBandeiraToImage(n,image);
}

const gerarCartao = (type,options=null) => {
    if(!type || typeof type === 'undefined'){
        return {
            error: true,
            message: 'Tipo do valor errado, parametros do tipo String || Array',
            params: [
                {TypeArray: ['Elo','Visa','MasterCard']},
                {TypeString: 'Elo'}
            ]
            
        }
    }
    return new GerarCartao(options).gerarCartao(type);
}

// const teste = {
//     ptBr: {
//         checkBandeira: v => checkBandeira(v),
//         checkBandeiraToImage: v =>  checkBandeiraToImage(v),
//     }
// }
// let master = '5464 7159 6039 8015';
// let elo = '5067 2253 9804 7854';
// let visa = '4532 5522 0793 4349';

// console.log(teste.ptBr.checkBandeira([elo,master,visa]));

// console.log(teste.ptBr.checkBandeiraToImage([elo,master,visa]));

let options = {
    image: true,
    mask: true,
    fullData: true,
    singleNumber: false,
}

console.log(gerarCartao('Elo',options));

export default Cartoes;