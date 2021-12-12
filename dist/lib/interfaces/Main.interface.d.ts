import Card from "./Card.inteface";
interface Error {
    error: boolean;
    bandeira: string;
    message: string;
}
interface ValidateCard {
    success: boolean;
    dataValue: string;
    mask: {
        active: boolean;
        valueOffMask: string;
    };
    typeOfbandeira: string;
    ObjectDataBandeira: any;
}
interface DefaultCardsObject {
    visa: Card;
    elo: Card;
    mastercard: Card;
}
interface ValidateObject {
    checkBandeira: Function;
    checkBandeiraToImage: Function;
    chekcBandeiraToRegex: Function;
    gerarCartao: Function;
}
export { Error, ValidateCard, DefaultCardsObject, ValidateObject };
