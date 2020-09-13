'use strict';

var Seattle = {
    Name: 'Seattle',
    MinHourlyCustomers: 23,
    MaxHourlyCustomers: 65,
    AverageCookiesPerCustomer: 6.3,
    Arr1: [],
//  declaring method picking random number between the Max and Min
    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);

        return random;
        
    },
    //  declaring method to round the number to intiger number equals or less 
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());

        return AverageCookies;
    },
    //  declaring method to add elemnts to array
    finalResults: function () {
        for (var i = 0; i < 14; i++) {
            this.Arr1.push(this.averagePurchased());

        }

    }

};
Seattle.finalResults();

//  creating elements 

var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Seattle';

var list = document.createElement('ul');
x.appendChild(list);
var strFlag = 'am';
for (var i = 0; i < 14; i++) {
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i + 6;
    if (j >= 12) strFlag = 'pm';
    if (j > 12) { j -= 12; }

    list_.textContent = j + strFlag + ': ' + Seattle.Arr1[i] + ' cookies';
}

//  creating total 
var summSeattle = 0;
for (var j = 0; j < Seattle.Arr1.length; j++) {
    summSeattle += Seattle.Arr1[j];

}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summSeattle + ' cookies';





//  Tokyo location ___________________________________________________________________________________________________



var Tokyo = {
    Name: 'Toyo',
    MinHourlyCustomers: 3,
    MaxHourlyCustomers: 24,
    AverageCookiesPerCustomer: 1.2,
    Arr1: [],
//  declaring method to pick a random number between the Max number and Min number 
    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);

        return random;
    },
     //  declaring method to round the number to intiger number equals or less 
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());

        return AverageCookies;
    },
    //  declaring method to add elemnts to array
    finalResults: function () {
        for (var i = 0; i < 14; i++) {
            this.Arr1.push(this.averagePurchased());

        }

    }

};
Tokyo.finalResults();

//  creating elements
var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Tokyo';

var list = document.createElement('ul');
x.appendChild(list);

var list = document.createElement('ul');
x.appendChild(list);

var strFlag = 'am';
for (var i = 0; i < 14; i++) {
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i + 6;
    if (j >= 12) strFlag = 'pm';
    if (j > 12) { j -= 12; }

    list_.textContent = j + strFlag + ': ' + Tokyo.Arr1[i] + ' cookies';
}

//  creating total 
var summTokyo = 0;
for (var j = 0; j < Tokyo.Arr1.length; j++) {
    summTokyo += Tokyo.Arr1[j];

}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summTokyo + ' cookies';








//  Dubai location ___________________________________________________________________________________________________

var Dubai = {
    Name: 'Dubai',
    MinHourlyCustomers: 11,
    MaxHourlyCustomers: 38,
    AverageCookiesPerCustomer: 3.7,
    Arr1: [],

//  declaring method to pick a random number between the Max number and Min number 

    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);

        return random;
    },

    //  declaring method to round the number to intiger number equals or less
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());

        return AverageCookies;
    },
    //  declaring method to add elemnts to array
    finalResults: function () {
        for (var i = 0; i < 14; i++) {
            this.Arr1.push(this.averagePurchased());

        }

    }

};
Dubai.finalResults();

//  creating elements
var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Dubai';

var list = document.createElement('ul');
x.appendChild(list);

var strFlag = 'am';
for (var i = 0; i < 14; i++) {
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i + 6;
    if (j >= 12) strFlag = 'pm';
    if (j > 12) { j -= 12; }

    list_.textContent = j + strFlag + ': ' + Dubai.Arr1[i] + ' cookies';
}
//  creating total
var summDubai = 0;
for (var j = 0; j < Dubai.Arr1.length; j++) {
    summDubai += Dubai.Arr1[j];

}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summDubai + ' cookies';







//  Paris location ___________________________________________________________________________________________________


var Paris = {
    Name: 'Paris',
    MinHourlyCustomers: 20,
    MaxHourlyCustomers: 38,
    AverageCookiesPerCustomer: 2.3,
    Arr1: [],

    //  declaring method to pick a random number between the Max number and Min number 

    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);

        return random;
    },
    //  declaring method to round the number to intiger number equals or less
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());

        return AverageCookies;
    },
    //  declaring method to add elemnts to array
    finalResults: function () {
        for (var i = 0; i < 14; i++) {
            this.Arr1.push(this.averagePurchased());

        }

    }

};
Paris.finalResults();

//  creating elements
var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Paris';

var list = document.createElement('ul');
x.appendChild(list);

var strFlag = 'am'; 
for (var i =0 ; i<14;i++){
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i+6;
    if(j>=12)strFlag='pm';
    if(j>12){j-=12;}
    
    list_.textContent = j+strFlag+': '+ Paris.Arr1[i] +' cookies';
}
//  creating total
var summParis = 0;
for (var j = 0; j < Paris.Arr1.length; j++) {
    summParis += Paris.Arr1[j];

}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summParis + ' cookies';






//  Paris location ___________________________________________________________________________________________________


var Lima = {
    Name: 'Lima',
    MinHourlyCustomers: 2,
    MaxHourlyCustomers: 16,
    AverageCookiesPerCustomer: 4.6,
    Arr1: [],
    //  declaring method to pick a random number between the Max number and Min number 

    randomNumber: function () {
        var random = Math.random();
        random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
        random = Math.floor(random);

        return random;
    },

    //  declaring method to round the number to intiger number equals or less
    averagePurchased: function () {
        var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());

        return AverageCookies;
    },

    //  declaring method to add elemnts to array
    finalResults: function () {
        for (var i = 0; i < 14; i++) {
            this.Arr1.push(this.averagePurchased());

        }

    }

};
Lima.finalResults();

//  creating elements
var x = document.getElementById('unorderedList');
var y = document.createElement('h2');
x.appendChild(y);
y.textContent = 'Lima';

var list = document.createElement('ul');
x.appendChild(list);

var strFlag = 'am'; 
for (var i =0 ; i<14;i++){
    var list_ = document.createElement('li');
    list.appendChild(list_);
    j = i+6;
    if(j>=12)strFlag='pm';
    if(j>12){j-=12;}
    
    list_.textContent = j+strFlag+': '+ Lima.Arr1[i] +' cookies';
}
//  creating total
var summLima = 0;
for (var j = 0; j < Lima.Arr1.length; j++) {
    summLima += Lima.Arr1[j];

}
var chList15 = document.createElement('li');
list.appendChild(chList15);
chList15.textContent = 'Total: ' + summLima + ' cookies';