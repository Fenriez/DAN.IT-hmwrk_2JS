let a = prompt("Enter range first number", "2"),
    b = prompt("Enter range second number", "200"),
    delta,
    q = 0,
    w = 1,
    res = [];

while (parseInt(a) != +a || parseInt(a) <= 1 || isNaN(a) == true) {
    a = prompt("Enter first number again", a);
}
while (parseInt(b) != b || parseInt(b) <= 1 || isNaN(b) == true) {
    b = prompt("Enter second number again", b);
}

if (+a > +b) {
    delta = +a;
    a = +b;
    b = delta;
} else {
    a = +a;
    b = +b;
}

for (let i = a; i <= b; i++) {
    if (i == 2) {
        docWR(i);
    } else if (i % 2 == 0) {
        continue;
    } else {
        oddCheck(i);
    }
}

function oddCheck(i) {
    for (let j = 1; j <= i; j++) {
        if (i % j != 0) {
            break;
        } else {
            docWR(i);
        }
    }
}

function docWR(i) {
    console.log(i);
}