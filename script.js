console.log('prime numbers');


let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let num = document.getElementById("num").value;
   

    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }
    if(isPrime) {
        let result = document.getElementById("result");

        result.value = `${num} is a prime number` ;
    }else{
        let result = document.getElementById("result");

        result.value= `${num} is not a prime number`;
        
    }

});