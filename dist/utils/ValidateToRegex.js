/**
 * Esse aquivo valida a bandeira usando algumas regex, rediradas de alguns sites.
 * https://gist.github.com/erikhenrique/5931368
 * https://gist.github.com/erikhenrique/5931368
 * 
 * Não sou tão focado em regex então ja peguei essas para facilitar o processo!
 * 
 * Acho que o proximo passo é procurar mais sobre bins de cartões de créditos!
*/

import { GenerateMask } from './GenerateCartao.js'


const __InitValues = {
    __BR: {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard: /^5[1-5][0-9]{14}/,
        elo: /^401178|^401179|^431274|^438935|^451416|^457393|^457631|^457632|^504175|^627780|^636297|^636369|^(506699|5067[0-6]\d|50677[0-8])|^(50900\d|5090[1-9]\d|509[1-9]\d{2})|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])/,
    },
    __OUTROS: {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard: /^5[1-5][0-9]{14}/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        amex: /^3[47][0-9]{13}/,
        discover : /^6(?:011|5[0-9]{2})[0-9]{12}/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
        elo: /^401178|^401179|^431274|^438935|^451416|^457393|^457631|^457632|^504175|^627780|^636297|^636369|^(506699|5067[0-6]\d|50677[0-8])|^(50900\d|5090[1-9]\d|509[1-9]\d{2})|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}/,       
        aura: /^(5078\d{2})(\d{2})(\d{11})$/ 
    },
    __ERROS: {
        naoEcontrada: {
            error: true,
            message: "Bandeira não encontrada"
        },
        notValue: {
            error: true,
            message: "Valor passado incorretamente, tente passar um valor do tipo String."
        }
    },
}


const forAnyRegex = (__Regex, __number) => {
    for(let key in __Regex){
        if(__Regex[key].test(__number)){
            return {
                value: __number,
                mask: GenerateMask(__number),
                bandeira: key,
            }
        }
    }

    return __InitValues.__ERROS.naoEcontrada;
}

export default (number, type=String('br')) => {

    if(!number || typeof number !== 'string'){
        return __InitValues.__ERROS.notValue;
    }

    number = number.replace(/[^0-9]+/g, '');
    
    if((type.toLowerCase()) == 'br'){
        return forAnyRegex(__InitValues.__BR, number);
    }else{
        return forAnyRegex(__InitValues.__OUTROS, number);
    }
}