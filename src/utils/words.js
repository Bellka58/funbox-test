export function wordsByNumber(number, forms) {
    let n = number % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) { return forms[2]; }
    if (n1 > 1 && n1 < 5) { return forms[1]; }
    if (n1 === 1) { return forms[0]; }
    return forms[2];
}