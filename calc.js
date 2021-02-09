var factorInput = document.querySelector("#factor");

var factor = Number(factorInput.value);

let btncalc = document.querySelector('#btncalc')

function tabuada() {
    var count=1
    while (count<=10) {
        let x = factor*count;
        count++;
        console.log (x);
}
}