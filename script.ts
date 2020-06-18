window.onload = function() {
    // Poniedziałek
    var addRowPlace1 = <HTMLElement> document.getElementById("buttonAddRow1");
    addRowPlace1.innerHTML = `<button onclick="addRow1()" id="addRow1">dodaj wiersz</button>`;
    // Wtorek
    var addRowPlace2 = <HTMLElement> document.getElementById("buttonAddRow2");
    addRowPlace2.innerHTML = `<button onclick="addRow2()" id="addRow2">dodaj wiersz</button>`;
    // Środa
    var addRowPlace2 = <HTMLElement> document.getElementById("buttonAddRow3");
    addRowPlace2.innerHTML = `<button onclick="addRow3()" id="addRow3">dodaj wiersz</button>`;
    // Czwartek
    var addRowPlace2 = <HTMLElement> document.getElementById("buttonAddRow4");
    addRowPlace2.innerHTML = `<button onclick="addRow4()" id="addRow4">dodaj wiersz</button>`;
    // Piątek
    var addRowPlace2 = <HTMLElement> document.getElementById("buttonAddRow5");
    addRowPlace2.innerHTML = `<button onclick="addRow5()" id="addRow5">dodaj wiersz</button>`;
    // Sobota
    var addRowPlace2 = <HTMLElement> document.getElementById("buttonAddRow6");
    addRowPlace2.innerHTML = `<button onclick="addRow6()" id="addRow6">dodaj wiersz</button>`;
    // Niedziela
    var addRowPlace2 = <HTMLElement> document.getElementById("buttonAddRow7");
    addRowPlace2.innerHTML = `<button onclick="addRow7()" id="addRow7">dodaj wiersz</button>`;
    
    var genPlace = <HTMLElement> document.getElementById("buttonGen");
    genPlace.innerHTML = `<button onclick="gen()" id="gen">generuj</button>`
};

var rows1: number = 2;
var rows2: number = 2;
var rows3: number = 2;
var rows4: number = 2;
var rows5: number = 2;
var rows6: number = 2;
var rows7: number = 2;
var count: number;

function gen() {
    let tmpVal1: string;
    let tmpVal2: string;
    let cols1: string[][] = [];
    let cols2: string[][] = [];
    let cols3: string[][] = [];
    let cols4: string[][] = [];
    let cols5: string[][] = [];
    let cols6: string[][] = [];
    let cols7: string[][] = [];

    let outputStr: string = `<xmp><table border="1">\n\t<tr>`;
    
    // Poniedziałek
    count = 1;
    for(let i: number = 0; i < rows1; i++) {
        
        tmpVal1 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        tmpVal2 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        cols1.push([tmpVal1, tmpVal2]);
    }
    let day1 = (<HTMLInputElement> document.getElementById("day1Row")).value
    outputStr += `
            <td rowspan="${rows1}">${day1}</td>`;
    for(let i: number = 0; i < rows1; i++) {
            outputStr += `    
            <td><strong>${cols1[i][0]}</strong></td>
            <td>${cols1[i][1]}</td>
        </tr>`;
        if(i < rows1 - 1)    outputStr += `\n        <tr>`;
    }
    
    // Wtorek
    count++;
    for(let i: number = 0; i < rows2; i++) {
        tmpVal1 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        tmpVal2 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        cols2.push([tmpVal1, tmpVal2]);
    }
    
    let day2 = (<HTMLInputElement> document.getElementById("day2Row")).value
    outputStr += `\n\t<tr>`;
    outputStr += `
            <td rowspan="${rows2}">${day2}</td>`;
    for(let i: number = 0; i < rows2; i++) {
            outputStr += `    
            <td><strong>${cols2[i][0]}</strong></td>
            <td>${cols2[i][1]}</td>
        </tr>`;
        if(i < rows2 - 1)    outputStr += `\n        <tr>`;
    }

    // Środa
    count++;
    for(let i: number = 0; i < rows3; i++) {
        tmpVal1 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        tmpVal2 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        cols3.push([tmpVal1, tmpVal2]);
    }
    
    let day3 = (<HTMLInputElement> document.getElementById("day3Row")).value
    outputStr += `\n\t<tr>`;
    outputStr += `
            <td rowspan="${rows3}">${day3}</td>`;
    for(let i: number = 0; i < rows3; i++) {
            outputStr += `    
            <td><strong>${cols3[i][0]}</strong></td>
            <td>${cols3[i][1]}</td>
        </tr>`;
        if(i < rows3 - 1)    outputStr += `\n        <tr>`;
    }

    
    // Czwartek
    count++;
    for(let i: number = 0; i < rows4; i++) {
        tmpVal1 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        tmpVal2 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        cols4.push([tmpVal1, tmpVal2]);
    }
    
    let day4 = (<HTMLInputElement> document.getElementById("day4Row")).value
    outputStr += `\n\t<tr>`;
    outputStr += `
            <td rowspan="${rows4}">${day4}</td>`;
    for(let i: number = 0; i < rows4; i++) {
            outputStr += `    
            <td><strong>${cols4[i][0]}</strong></td>
            <td>${cols4[i][1]}</td>
        </tr>`;
        if(i < rows4 - 1)    outputStr += `\n        <tr>`;
    }

    // Piątek
    count++;
    for(let i: number = 0; i < rows5; i++) {
        tmpVal1 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        tmpVal2 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        cols5.push([tmpVal1, tmpVal2]);
    }
    
    let day5 = (<HTMLInputElement> document.getElementById("day5Row")).value
    outputStr += `\n\t<tr>`;
    outputStr += `
            <td rowspan="${rows5}">${day5}</td>`;
    for(let i: number = 0; i < rows5; i++) {
            outputStr += `    
            <td><strong>${cols5[i][0]}</strong></td>
            <td>${cols5[i][1]}</td>
        </tr>`;
        if(i < rows5 - 1)    outputStr += `\n        <tr>`;
    }

    // Sobota
    count++;
    for(let i: number = 0; i < rows6; i++) {
        tmpVal1 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        tmpVal2 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        cols6.push([tmpVal1, tmpVal2]);
    }
    
    let day6 = (<HTMLInputElement> document.getElementById("day6Row")).value
    outputStr += `\n\t<tr>`;
    outputStr += `
            <td rowspan="${rows6}">${day6}</td>`;
    for(let i: number = 0; i < rows6; i++) {
            outputStr += `    
            <td><strong>${cols6[i][0]}</strong></td>
            <td>${cols6[i][1]}</td>
        </tr>`;
        if(i < rows6 - 1)    outputStr += `\n        <tr>`;
    }

    // Niedziela
    count++;
    for(let i: number = 0; i < rows7; i++) {
        tmpVal1 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        tmpVal2 = (<HTMLInputElement> document.getElementsByTagName("input")[count]).value;
        count++;
        cols7.push([tmpVal1, tmpVal2]);
    }
    
    let day7 = (<HTMLInputElement> document.getElementById("day7Row")).value
    outputStr += `\n\t<tr>`;
    outputStr += `
            <td rowspan="${rows7}">${day7}</td>`;
    for(let i: number = 0; i < rows7; i++) {
            outputStr += `    
            <td><strong>${cols7[i][0]}</strong></td>
            <td>${cols7[i][1]}</td>
        </tr>`;
        if(i < rows7 - 1)    outputStr += `\n        <tr>`;
    }

    outputStr += `\n</table></xmp>`;
    
    let outputEl = <HTMLElement> document.getElementById("output");
    outputEl.innerHTML = outputStr;
}
function addRow1() {
    var table = <HTMLTableElement> document.getElementById("inputTable1");
    var row = table.insertRow();
    var col1 = row.insertCell();
    var col2 = row.insertCell();
    col1.innerHTML = `<input type="text" size="5">`;
        col2.innerHTML = `<input type="text" size="100">`;
    rows1++;
}
function addRow2() {
    var table = <HTMLTableElement> document.getElementById("inputTable2");
    var row = table.insertRow();
    var col1 = row.insertCell();
    var col2 = row.insertCell();
    col1.innerHTML = `<input type="text" size="5">`;
        col2.innerHTML = `<input type="text" size="100">`;
    rows2++;
}
function addRow3() {
    var table = <HTMLTableElement> document.getElementById("inputTable3");
    var row = table.insertRow();
    var col1 = row.insertCell();
    var col2 = row.insertCell();
    col1.innerHTML = `<input type="text" size="5">`;
        col2.innerHTML = `<input type="text" size="100">`;
    rows3++;
}
function addRow4() {
    var table = <HTMLTableElement> document.getElementById("inputTable4");
    var row = table.insertRow();
    var col1 = row.insertCell();
    var col2 = row.insertCell();
    col1.innerHTML = `<input type="text" size="5">`;
        col2.innerHTML = `<input type="text" size="100">`;
    rows4++;
}
function addRow5() {
    var table = <HTMLTableElement> document.getElementById("inputTable5");
    var row = table.insertRow();
    var col1 = row.insertCell();
    var col2 = row.insertCell();
    col1.innerHTML = `<input type="text" size="5">`;
        col2.innerHTML = `<input type="text" size="100">`;
    rows5++;
}
function addRow6() {
    var table = <HTMLTableElement> document.getElementById("inputTable6");
    var row = table.insertRow();
    var col1 = row.insertCell();
    var col2 = row.insertCell();
    col1.innerHTML = `<input type="text" size="5">`;
        col2.innerHTML = `<input type="text" size="100">`;
    rows6++;
}
function addRow7() {
    var table = <HTMLTableElement> document.getElementById("inputTable7");
    var row = table.insertRow();
    var col1 = row.insertCell();
    var col2 = row.insertCell();
    col1.innerHTML = `<input type="text" size="5">`;
        col2.innerHTML = `<input type="text" size="100">`;
    rows7++;
}