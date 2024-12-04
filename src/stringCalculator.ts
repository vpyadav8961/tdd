export function add(number: string): number {
    if(!number.trim()) return 0;

    if(number.length == 1) return parseInt(number);

    let d = /,|\n/; 
    if (number.startsWith("//")) {
        const parts = number.split("\n", 2);
        const cd = parts[0].slice(2);
        d = new RegExp(cd.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        number = parts[1]; 
      }

    const num = number.split(d).map(Number); 

    // Here we are filtering negative number to show in exception
    const negativeNumbers = num.filter(n => n < 0);

    // Checking negative number
    if(negativeNumbers.length > 0){
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
    } 
    let sum = num.reduce((a, c) => a + c, 0);
    return sum;
}