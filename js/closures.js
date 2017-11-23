function createGreeting(language) {

    return function(firstname, lastname) {

        if (language == 'en') {
            return 'Hi ' + firstname + ' ' + lastname;
        }

        if (language == 'pt') {
            return 'Olá ' + firstname + ' ' + lastname;
        }

    }

};

var greetEn = createGreeting('en');
var greetPt = createGreeting('pt');

console.log(greetEn('Rodrigo','Vallades'));
console.log(greetPt('Adrian','Smith'));