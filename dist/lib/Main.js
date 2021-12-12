"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cartoes_pt_br_1 = __importDefault(require("./cards/cartoes-pt-br"));
const ValidateToRegex_1 = __importDefault(require("./utils/ValidateToRegex"));
const ReplaceCardNumber_1 = require("./utils/ReplaceCardNumber");
class Main {
    constructor(numero) {
        this._fullValue = [];
        this.objectBandeiras = cartoes_pt_br_1.default.DefautlCards;
        if (numero) {
            this._fullValue = typeof numero === 'object' ? [...numero.map((num) => {
                    return ReplaceCardNumber_1.replaceCardNumber(num);
                })] : [ReplaceCardNumber_1.replaceCardNumber(numero)];
        }
    }
    _getCardData(type) {
        switch (type) {
            case 'elo':
                return this.objectBandeiras.elo;
            case 'visa':
                return this.objectBandeiras.visa;
            case 'mastercard':
                return this.objectBandeiras.mastercard;
            default:
                return { in: [], bandeira: '' };
        }
    }
    _checkBandeira() {
        let nR = [];
        if (typeof this._fullValue !== 'undefined') {
            this._fullValue.forEach((v, i) => {
                nR.push(this._privateDefineBandeira(this._removeMasckUnicValue(v, i)));
            });
        }
        return nR;
    }
    _privateDefineBandeira(CardValue) {
        const regexValidate = ValidateToRegex_1.default(CardValue.string, 'br');
        if (regexValidate.value) {
            return {
                success: true,
                dataValue: CardValue.stringFull,
                mask: {
                    active: false,
                    valueOffMask: CardValue.string,
                },
                typeOfbandeira: regexValidate.bandeira,
                ObjectDataBandeira: this._getCardData(regexValidate.bandeira)
            };
        }
        return {
            error: true,
            bandeira: 'Não identificada',
            message: "Verifique o valores passado para a função. Valores aceitos: String or Array"
        };
    }
    _removeMasckUnicValue(num, i) {
        let newValue = '';
        num.split(' ').forEach(s => {
            newValue = newValue + s;
        });
        return {
            string: newValue,
            stringFull: num,
            indice: i,
            mask: false,
            length: newValue.length,
            substringln: String(newValue.substring(0, 6)),
            substringIn: String(newValue.substring(0, 1))
        };
    }
    _checkBandeiraToImage(value) {
        value = typeof value === 'object' ? [...value.map((num) => {
                return ReplaceCardNumber_1.replaceCardNumber(num);
            })] : [ReplaceCardNumber_1.replaceCardNumber(value)];
        let newArray = [];
        value.forEach((v, i) => {
            let objectSet = this._privateDefineBandeira(this._removeMasckUnicValue(v, i));
            if (objectSet.success) {
                newArray.push(Object.assign(Object.assign({}, objectSet), { encode: {
                        encode: true,
                        type: 'url',
                        image: {
                            url: `http://api-bfs.worktab.com.br/assets/bandeiras/${objectSet.typeOfbandeira == 'elo' ? 'elo' : objectSet.typeOfbandeira == 'visa' ? 'visa' : 'master'}.png`,
                        }
                    } }));
            }
            else {
                newArray.push(objectSet);
            }
        });
        return newArray;
    }
}
exports.default = Main;
//# sourceMappingURL=Main.js.map