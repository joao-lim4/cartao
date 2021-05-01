/*
    V1.0.0.
    * object default, esse objeto inclui os pricipais cartoes de credito usados no brasil
    * 
*/

const DefautlCards = {
    masterCard: {
        in: '5',
        bandeira: 'MasterCard',
    },
    elo: {
        in: [
            '636368','438935','504175','451416','509048','509067',
            '509049','509069','509050','509074','509068','509040',
            '509045','509051','509046','509066','509047','509042',
            '509052','509043','509064','509040',
            '36297', '5067','4576','4011',    
        ],
        bandeira: 'Elo',
    },
    visa: {
        in: '4',
        bandeira: 'Visa',
    }
};

export default { DefautlCards };