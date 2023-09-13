const pythagorean = (a, b) => {
  const c = Math.sqrt(a * a + b * b);
  return c;
};
console.log(pythagorean(5, 12));

const generatePassword = (n) => {
  let characters =
    "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz";
  let password = "";
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
};
console.log(generatePassword(8));

const isPrime = (n) => {
  let kv = Math.sqrt(n)
  console.log(kv);
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(4));

function splitNumber(num) {
    const intPart = Math.floor(num);
    const decimalPart = (num - intPart) * 100;
    const result = {
      int: intPart,
      decimal: Math.round(decimalPart)
    };
    
    return result;
  }
  console.log(splitNumber(2)); 
  console.log(splitNumber(2.34)); 
  
  const isArmstrong = (number) =>  {
    const [firstStrNum, secondStrNum, thirdStrNum] = number.toString();
    const firstNumRes = (+firstStrNum) **  3;
    const secondNumRes = (+secondStrNum) **  3;
    const thirdNumRes = (+thirdStrNum) ** 3;
  
    return firstNumRes + secondNumRes + thirdNumRes ===  number;
  };
   const result = isArmstrong(153)
  console.log(result);
  

  