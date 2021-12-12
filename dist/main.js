"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = require("./lib/Main");
const ValidateToRegex_1 = require("./lib/utils/ValidateToRegex");
const GenerateCartao_1 = require("./lib/utils/GenerateCartao");
const Validate = {
    checkBandeira: (value) => checkBandeira(value),
    checkBandeiraToImage: (value) => checkBandeiraToImage(value),
    chekcBandeiraToRegex: (value, type) => chekcBandeiraToRegex(value, type),
    gerarCartao: (type, options) => gerarCartao(type, options)
};
const checkBandeira = (value) => {
    return new Main_1.default(value)._checkBandeira();
};
const checkBandeiraToImage = (value) => {
    return new Main_1.default()._checkBandeiraToImage(value);
};
const chekcBandeiraToRegex = (value, type = 'br') => {
    return ValidateToRegex_1.default(value, type);
};
const gerarCartao = (type, options) => {
    return new GenerateCartao_1.default(options).gerarCartao(type);
};
exports.default = Validate;
