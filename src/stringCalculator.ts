export function add(number: string): number {
    if(!number.trim()) return 0;

    if(number.length == 1) return parseInt(number);

    const num = number.split(/,|\n/).map(Number); 
    const negativeNumbers = num.filter(n => n < 0);

    if(negativeNumbers.length > 0){
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
    } 
    let sum = num.reduce((a, c) => a + c, 0);
    return sum;
}