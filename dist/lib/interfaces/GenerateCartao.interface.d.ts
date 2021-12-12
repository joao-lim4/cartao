interface OptionDefault {
    image?: boolean;
    mask?: boolean;
    fullData?: boolean;
    singleNumber?: boolean;
}
interface DataCard {
    success: boolean;
    value: string;
    mask: {
        active: boolean;
        value: string | null;
    };
    typeOfbandeira: string;
    ObjectDataBandeira: {
        type: string;
        bandeira: {
            active: boolean;
            iamge: string | null;
        };
    };
}
interface ErrorMessage {
    error: boolean;
    message: string;
}
export { OptionDefault, DataCard, ErrorMessage };
