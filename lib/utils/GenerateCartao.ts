import { DataCard , ErrorMessage} from '../interfaces/GenerateCartao.interface';
import cartoes from '../cards/cartoes-pt-br';

const Cards = cartoes.DefautlCards;

class GenerateCartao{

    private _options:any = {
        fullData: true,
        image: true,
        mask: true,
        singleNumber: false,
    };
    private _optionsInstace:boolean = false;
    private _initialState:any = {...this._options};

    constructor(options:any){
        if(options){
            this._optionsInstace = true;
            this._generateOptions(options);
        }
    }

    _generateOptions(options: any){
        if(options.singleNumber){
            let instace = this._initialState;
            for(let key in instace){
                instace[key] ? instace[key] = false : instace[key] = true;
            }
            this._options = instace;
        }else{
            for(let key in this._options){
                if(key != 'singleNumber'){
                    this._options[key] = options[key] ? options[key] : false;
                }
            }
        }
    }

    gerarCartao(type:string): DataCard | string | ErrorMessage{
        if(this._optionsInstace){    
            return this._switchCards(type);
        }else{
            this._generateOptions({singleNumber: true});
            return this._switchCards(type);
        }
    }

    _generateNumber(ini:Array<string> | string):string{
        
        ini = [...ini];

        ini = String(ini[Math.floor(Math.random() * (Math.floor(ini.length) - Math.ceil(0)) + Math.ceil(0))]);

        let numberValue:string = '';

        for(let i = 1; i <= 16; i++){
          
            if(ini.length >= i){
                numberValue+=ini[i - 1];
            }else{
                let newInit = Math.floor(Math.random() * (Math.floor(9) - Math.ceil(0)) + Math.ceil(0));
                numberValue+=newInit;
            }
          
        }

        return numberValue;
    }

    _generateMaks(num:string){
        /* 
            referencia 
            regex tirada do site
            https://wbruno.com.br/expressao-regular/mascara-cartao-de-credito-com-javascript-e-expressao-regular-regex/
        */

        num=num.replace(/\D/g,"")
            .replace(/^(\d{4})(\d)/g,"$1 $2")
            .replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3")
            .replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");

        return num;
    }


    _generateData(card:string,type:string):DataCard | string{
        if(this._options.fullData){
            return {
                success: true,
                value: card,
                mask: {
                    active: true,
                    value: this._generateMaks(card),
                },
                typeOfbandeira: type,
                ObjectDataBandeira: {
                    type: type,
                    bandeira: {
                        active: true,
                        iamge: `http://api-bfs.worktab.com.br/assets/bandeiras/${type == 'Elo' ? 'elo' : type == 'Visa' ? 'visa' : 'master'}.png` ,
                    }
                }
            }
        }else{
            if(!this._options.singleNumber){
                return {
                    success: true,
                    value: card,
                    mask: {
                        active: this._options.mask ? true : false,
                        value: this._options.mask ? this._generateMaks(card) : null,
                    },
                    typeOfbandeira: type,
                    ObjectDataBandeira: {
                        type: type,
                        bandeira: {
                            active: this._options.image ? true : false,
                            iamge: this._options.image ? `http://api-bfs.worktab.com.br/assets/bandeiras/${type == 'Elo' ? 'elo' : type == 'Visa' ? 'visa' : 'master'}.png` : null,
                        }
                    }
                }
            }else{
                return card;
            }
        }
    }


    _switchCards(type:string): DataCard | string | ErrorMessage{
        switch ((type.toLowerCase())) {
            case 'elo':
                return this._generateData(this._generateNumber(Cards.elo.in), 'Elo');
            case 'mastercard': 
                return this._generateData(this._generateNumber(Cards.mastercard.in), 'MasterCard'); 
            case 'visa':
                return this._generateData(this._generateNumber(Cards.visa.in), 'Visa');  
            default:
                return {
                    error: true,
                    message: "Informe um tipo de bandeira valido, format |String| ex: Elo, MasterCard ou Visa"
                };
        }
    }
}

export default GenerateCartao;