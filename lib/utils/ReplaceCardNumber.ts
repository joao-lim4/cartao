const replaceCardNumber  = (numberCard: string):string => {
    numberCard = numberCard.replace(' ', '');
    if(numberCard.length < 16) {
        for(let cardLen:number = numberCard.length; cardLen <= 16; cardLen++ ){
            numberCard+='0';
        }
    }
     
    return numberCard;
}



export { replaceCardNumber }