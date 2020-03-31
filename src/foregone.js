const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

let amt = 0;
const numbers = [];

const solve = n => {
    let adder = 0n;
    for(let i = 1n;n/i > 0;i*=10n) {
        if((n/i)%10n === 4n){
            adder += i;
        }
    }
    return [n-adder,adder];
};

 rl.on('line', line => {
     if(amt === 0){
         amt = Number(line);
     } else {
         numbers.push(BigInt(line));
         if(numbers.length === amt){
             const solutions = numbers.map(n => solve(n));
             for(let i=0;i<solutions.length;++i) {
                 console.log(`Case #${i+1}: ${solutions[i][0]} ${solutions[i][1]}`);
             }
         }
     }
 });