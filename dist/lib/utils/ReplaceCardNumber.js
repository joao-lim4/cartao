"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceCardNumber = void 0;
const replaceCardNumber = (numberCard) => {
    numberCard = numberCard.replace(' ', '');
    if (numberCard.length < 16) {
        for (let cardLen = numberCard.length; cardLen <= 16; cardLen++) {
            numberCard += '0';
        }
    }
    return numberCard;
};
exports.replaceCardNumber = replaceCardNumber;
