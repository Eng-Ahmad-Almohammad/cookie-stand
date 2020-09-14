'use strict';
// Declaring global variables
var Arr1 = [];
var LEN = 15;
var cumArr = new Array(LEN).fill(0);
var div1 = document.getElementById('unorderedList');
var table1 = document.createElement('table');
div1.appendChild(table1);

// Declaring function for objacts
function Cookies(name, MinHourlyCustomers, MaxHourlyCustomers, AverageCookiesPerCustomer) {
    this.Name = name;
    this.MinHourlyCustomers = MinHourlyCustomers;
    this.MaxHourlyCustomers = MaxHourlyCustomers;
    this.AverageCookiesPerCustomer = AverageCookiesPerCustomer;
}
// Declaring a method to get a random number betwenn two values
Cookies.prototype.randomNumber = function () {
    var random = Math.random();
    random = this.MinHourlyCustomers + random * (this.MaxHourlyCustomers - this.MinHourlyCustomers + 1);
    random = Math.floor(random);

    return random;

}
// Declaring method to get random average purchased cookies per hour
Cookies.prototype.averagePurchased = function () {
    var AverageCookies = Math.floor(this.AverageCookiesPerCustomer * this.randomNumber());

    return AverageCookies;
}
// Declaring method to repeat last method to have 14 random number
Cookies.prototype.finalResults = function () {
    Arr1 = [];
    for (var i = 0; i < 14; i++) {
        Arr1.push(this.averagePurchased());
        cumArr[i] +=  Arr1[i];
    }

    
}


// Declaring method to creat table which have the random numbers and the summition of each row
Cookies.prototype.render = function (para) {
    this.row2 = document.createElement('tr');
    table1.appendChild(this.row2);


    this.sumRows = 0;

    
    for (var i = 0; i <= 15; i++) {
        if (i < 15) {
            if(i==0){
                this.list = document.createElement('td');
                this.row2.appendChild(this.list);
                this.list.textContent = this.Name;
                
            }
            else{
            this.list = document.createElement('td');
            this.row2.appendChild(this.list);
            this.list.textContent = Arr1[i-1];
            this.sumRows += Arr1[i-1];}
        }
        if (i == 15) {
            this.list = document.createElement('td');
            this.row2.appendChild(this.list);
            this.list.textContent = this.sumRows;
            cumArr [14]+=this.sumRows;
        }


    }


}

// Declaring method to creat last row which have the summition of each column
Cookies.prototype.renderSum = function(){
    this.lastRow= document.createElement('tr');
    table1.appendChild(this.lastRow);
     for(var i = 0 ; i <16 ; i++){
         if(i==0)
         {
            this.sumCol = document.createElement('td');
            this.lastRow.appendChild(this.sumCol);
            this.sumCol.textContent= 'Totals'; 
         }
         else{
            this.sumCol = document.createElement('td');
            this.lastRow.appendChild(this.sumCol);
            this.sumCol.textContent= cumArr[i-1]; 
        }
     }



}


// Creating the titel row 
var tableTitel = document.createElement('tr');
table1.appendChild(tableTitel);

var strFlag = 'am';
for (var i = 0; i < 16; i++) {
    if (i == 0) {
        var emptyCell = document.createElement('td');
        tableTitel.appendChild(emptyCell);
        emptyCell.textContent = '\t';

    }


    else if (i == 15) {
        var emptyCell = document.createElement('td');
        tableTitel.appendChild(emptyCell);
        emptyCell.textContent = 'Daily Location Total';

    }
    else {
        var emptyCell = document.createElement('td');
        tableTitel.appendChild(emptyCell);
        var j = i + 5;
        if (j >= 12) strFlag = 'pm';
        if (j > 12) { j -= 12; }
        emptyCell.textContent = j + ':00' + strFlag
    }


}


var seattle = new Cookies('Seattle', 23, 65, 6.3);
var tokyo = new Cookies('Tokyo', 3, 24, 1.2);
var dubai = new Cookies('Dubai', 11, 38, 3.7);
var paris = new Cookies('Paris', 20, 38, 2.3);
var lima = new Cookies('Lima', 2, 16, 4.6);



seattle.finalResults();
seattle.render();

tokyo.finalResults();
tokyo.render();

dubai.finalResults();
dubai.render();

paris.finalResults();
paris.render();

lima.finalResults();
lima.render();
lima.renderSum();




