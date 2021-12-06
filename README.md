<p align="center">
    <a href="https://github.com/joao-lim4">
        <img src="./node.png" alt="Logo" width="120" height="120">
    </a>
    <br/>
    <h3 align="center">NPM Package to validate Brazilian credit card flags</h3>
    <br/>
    <p align="center">
        console.log('☕☕');
        <br />
        <a href="https://github.com/joao-lim4/cartao"><strong> << View Doc >></strong></a>
    </p>
</p>


## About
NPM package to validate Brazilian credit card flags, still under development.
Any suggestion or improvement can contact me!

### Installation

1. Install the package
```sh
    npm install --save validate-flag || yarn add validate-flag
```




## Usage

1. Import the package

```js
    import Validate from 'validate-flag';
```

## Example functions

```js
import Validate from 'validate-flag';

function usingAllFunctions(){

    const generateCardNumber = Validate.generateCardNumber('Elo');
    const flagType = Validate.checkOnlyTheFlag(generateCardNumber.value, /* true */);
    const flagTypeWithImage = Validate.checkTheFlagAndImage(generateCardNumber.value, /* true */);

}

function checkOnlyTheFlag(numbers, useStandardNumbers=false){
    
    /**
     * @params
     * @numbers it can be just a string with the card number or an array with several numbers
     *
     * The number of the card passed can be passed with or without a mask
    */


    const testNumbers = [
        "4576647846678213", //Elo 
        "5522209042604038", //MasterCard
        "4929054385222820" //Visa
    ];

    return Validate.checkBandeira(!useStandardNumbers ? numbers : testNumbers);
}


function checkTheFlagAndImage(numbers, useStandardNumbers=false){
    
    /**
     * @params
     * @numeros it can be just a string with the card number or an array with several numbers
     *
     * The number of the card passed can be passed with or without a mask
    */


    const testNumbers = [
        "4576647846678213", //Elo 
        "5522209042604038", //MasterCard
        "4929054385222820" //Visa
    ];

    return Validate.checkBandeiraToImage(!useStandardNumbers ? numbers : testNumbers);
}


function generateCard(type){

    /**
     * @params 
     * @type String 
     * @options Object
     * 
     * Param type is the type of the card, with Elo || Master || Visa
     */

    const options = {
        image: true,
        mask: true,
        fullData: true,
        singleNumber: false,
    };

    /**
        * options are passed through an object
        * image == true ? Returns a url corresponding to the generated card's flag
        * mask == true ? Returns the card number with mask
        * fullData == true ? Returns all data
        * singleNumber == true ? Returns only the card number
    */



    return Validate.gerarCartao(type, options);
}


function checkFlagUsingRegex(number, type) {

   /**
        * If you only want the flag to be validated, you can use this function,
        * it will return true || false together with the flag.
        * Return example:
        * ------------------ ERRORS ------------------
        * if the value passed does not match any regex it returns {
        *  error: true,
        *  message: "Flag not found"
        * },
        *
        * if the value of the number passed is not a String {
        *  error: true,
        *  message: "Value passed incorrectly, try to pass a value of type String."
        * }
        * ------------------ EXPECTED RETURN ------------------
        * {
        *  value: (number passed as a function parameter),
        *  mask: (number with mask),
        *  flag: (example flag: Elo || MasterCard || Visa),
        * }
    */



    /**
         * @params
         * @number String
         * @type String Ex: br // others
         *
         * Direct between @type == br && @type == others
         * @type == br the credit card number will only pass through the regex of the most used flags in Brazil like Visa | Link | MasterCard
         *
         * @type == others the card number will have passed through other flags such as Amex
         * @type defaut value en
    */

    return Validate.checkBandeiraToRegex(number, type);
}

usingAllFunctions();
```

## Got an error?
Get in touch with me telling me about the error, which I will resolve as soon as possible.

## How can you help me?
Do you have the most updated regex ?? Send me or make a pull request!

## Contact
[INSTAGRAM](https://www.instagram.com/joao_lim4/)
<br/>
[WHATSAPP](https://api.whatsapp.com/send/?phone=%2B5531989013076&text=Ola%20vim%20pelo%20seu%20primeiro%20projeto%20react&app_absent=0&lang=pt_br)
<br/>
lima.devs@gmail.com




