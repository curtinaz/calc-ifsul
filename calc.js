var factor = document.querySelector("#factor");

factor = new Number(factor);

let btncalc = document.querySelector('#btncalc')

function tabuada() {
    var count=1
    while (count<=10) {
        let x = factor*count;
        count++;
        console.log (x);
}
}