export function add(number: string): number {
    if(!number.trim()) return 0;

    if(number.length == 1) return parseInt(number);

    let num = number.split(/,|\n/).map(Number); 
    let sum = num.reduce((a, c) => a + c, 0);
    return sum;
}