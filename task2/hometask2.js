const inputs = process.argv.slice(2);
const operation = inputs[0];
const values = inputs.slice(2).map(Number);
if(operation=='--operation'){
for (let i = 0; i < values.length; i++) {
    if (isNaN(values[i])) {
        console.log("Invalid numbers,please enter the valid numbers");
        const exitcode = 0;
        process.exit(exitcode);
    }
}
const op = inputs[1];
switch (op) {
    case 'addition':
        let sum = 0;
        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }
        console.log(sum);
        break;
    case 'multiplication':
        let mul = 1;
        for (let i = 0; i < values.length; i++) {
            mul *= values[i];
        }
        console.log(mul);
        break;
    case 'subtraction':
        if (values.length > 2)
            console.log("Invalid,Enter only 2 numbers");
        else {
            let sub = values[0] - values[1];
            console.log(sub);
        }
        break;
    case 'division':
        if (values.length > 2)
            console.log("Invalid,Enter only 2 numbers");
        else {
            let div = values[0] / values[1];
            console.log(div);
        }
        break;
    default: console.log("Please enter the valid operation");

}
}
else{
    console.log("Enter the valid commands");
}
