interface BrCards {
    visa: RegExp,
    mastercard: RegExp,
    elo: RegExp,
}

interface OutrosCards {
    visa: RegExp,
    mastercard: RegExp,
    diners: RegExp,
    amex: RegExp,
    discover : RegExp, 
    hipercard: RegExp, 
    elo: RegExp,
    jcb: RegExp,        
    aura: RegExp,  
}

interface Error {
    error: boolean,
    message: string
}

interface InitValue {
    __BR: BrCards,
    __OUTROS: OutrosCards,
    __ERROS: {
        notValue: Error,
        naoEcontrada: Error
    }
}

interface CardValidate{
    value: string,
    mask: string,
    bandeira: string,
}

interface ErrorMessage extends Error{};

export { InitValue , CardValidate, ErrorMessage };