<p align="center">
    <a href="https://github.com/joao-lim4">
        <img src="./node.png" alt="Logo" width="120" height="120">
    </a>
    <br/>
    <h3 align="center">NPM Package para validar bandeiras de cartões de créditos brasileiros</h3>
    <br/>
    <p align="center">
        console.log('☕☕');
        <br />
        <a href="https://github.com/joao-lim4/cartao"><strong> << View Doc >></strong></a>
    </p>
</p>


## Sobre
Pacote NPM para validar bandeiras de cartões de créditos brasileiros, ainda em desenvolvimento.
Qualquer sugestão ou melhoria pode entrar em contato comigo!
Atualmente tem suporte somente para ES.

### Instalação

1. Instale o pacote
```sh
    npm install --save validate-flag || yarn add validate-flag
```




## Usando

1. Importe o pacote

```js
    import Validate from 'validate-flag';
```

## Funções de exemplo

```js
import Validate from 'validate-flag';

function usandoTodasAsFuncoesDisponiveis(){

    const numeroDoCartaoGeradoPelaLib = gerarCartao('Elo');
    const TipoDaBandeiraDoCartao = verificarSomenteABandeira(numeroDoCartaoGeradoPelaLib.value, /* true */);
    const TipoDaBandeiraDoCartaoComImage = verificarABandeiraEImage(numeroDoCartaoGeradoPelaLib.value, /* true */);

}

function verificarSomenteABandeira(numeros, useNumerosDefinidos=false){
    
    /**
     * @params
     * @numeros pode ser somente uma string com o número do cartão ou um array com vários números
     *
     * O número do cartão passado pode ser passado com máscara ou sem máscara
    */


    const numerosDeTest = [
        "4576647846678213", //Elo 
        "5522209042604038", //MasterCard
        "4929054385222820" //Visa
    ];

    return Validate.ptBr.checkBandeira(!useNumerosDefinidos ? numeros : numerosDeTest);
}


function verificarABandeiraEImage(numeros, useNumerosDefinidos=false){
    
    /**
     * @params
     * @numeros pode ser somente uma string com o número do cartão ou um array com vários números
     *
     * O número do cartão passado pode ser passado com máscara ou sem máscara
    */


    const numerosDeTest = [
        "4576647846678213", //Elo 
        "5522209042604038", //MasterCard
        "4929054385222820" //Visa
    ];

    return Validate.ptBr.checkBandeiraToImage(!useNumerosDefinidos ? numeros : numerosDeTest);
}


function gerarCartao(type){

    /**
     * @params 
     * @type String 
     * @options Object
     * 
     * Param type é o tipo do cartão, sendo Elo || Master || Visa
     */

    const options = {
        image: true,
        mask: true,
        fullData: true,
        singleNumber: false,
    };

    /**
        * as opções são passadas por um objeto
        * image == true ? Retorna uma url correspondente a bandeira do cartão gerado
        * mask == true ? Retorna o número do cartão com máscara
        * fullData == true ? Retorna todos os dados
        * singleNumber == true ? Retorna somente o número do cartão
    */



    return Validate.ptBr.gerarCartao(type, options);
}


function validateBandeiraToRegex(number, type) {
    /**
     * @params
     * @number String
     * @type String Ex: br // outros
     * 
     * Direfenca entre @type == br && @type == outros
     * @type == br o numero do cartão de credito ira passar somente pelas regex das bandeiras mais usadas no Brasil como Visa | Elo | MasterCard
     * 
     * @type == outros o número do cartão passara por outras bandeiras como Amex 
     * @type defaut value br
    */

    return Validate.ptBr.checkBandeiraToRegex(number, type);
}

usandoTodasAsFuncoesDisponiveis();
```


## Obteve algum erro?
Entre em contato comigo me falando do erro, que resolverei assim que possível.



## Contato
[INSTAGRAM](https://www.instagram.com/joao_lim4/)
<br/>
[WHATSAPP](https://api.whatsapp.com/send/?phone=%2B5531989013076&text=Ola%20vim%20pelo%20seu%20primeiro%20projeto%20react&app_absent=0&lang=pt_br)
<br/>
limas.devs@gmail.com




