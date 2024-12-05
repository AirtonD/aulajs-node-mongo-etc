function FizzBuzz (n) {
    if (n % 5 === 0 && n % 3 === 0){
        return "FizzBuzz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else {
        return n
    }
}

let i = 0;
while (i <= 100){
    i++;
    console.log(FizzBuzz(i));

}