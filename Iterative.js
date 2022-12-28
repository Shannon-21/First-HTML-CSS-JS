let adults;
let children;

if (adults < 0) {
    adults = 0;
}

if (children < 0) {
    children = 0
}

function calc(adults, children) {
    return adults*12 + children*6;
}

price = calc(adults, children);
console.log(price);

for (let i=1; i<=adults; i++) {
    console.log("Ticket #" + i);
}

window.onload = function() {
    let btn = document.getElementById('btn');
    btn.onclick = function() {
        let adults = document.getElementById('Adults').value;
        let children = document.getElementById('Children').value;
        let price = calc(adults, children);
        alert(price);
    }
}
