# Masai Evaluation Assignment

This repository is created for the Masai Evaluation Assignment focusing on Number systems.

## Repository Setup

1. Created a repository named **numbersystem**.
2. Cloned the repository to my local machine.

## Files Created

### 1. index.js

In this file, I have written code to determine even and odd numbers. Here is the Structure of the code:
```javascript
// index.js
//JS code to print even and odd numbers in an Array.
const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        console.log(numbers[i], "is Even number");
    }else{
        console.log(numbers[i], "is Odd number");
    }
  }

```
### Output for index.js
```
PS E:\numbersystem> node index.js
3 is Odd number
7 is Odd number
2 is Even number
15 is Odd number
9 is Odd number
20 is Even number
5 is Odd number
14 is Even number
12 is Even number
1 is Odd number
8 is Even number
11 is Odd number
6 is Even number
19 is Odd number
4 is Even number
10 is Even number
17 is Odd number
13 is Odd number
16 is Even number
18 is Even number
```

### 2. app.js

In this file, I have written code to find Prime numbers in an array, Store them in an another array, and calculate the maximum, minimum and sum of that new array. Here is the Structure of the code:
```javascript
//app.js
// JS code to find Prime Numbers in an given Array
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  
  let primeArray=[];
  for(let i=0;i<numbers.length;i++){
    let count=0;
    for(let j=1;j<=numbers[i];j++){
        if(numbers[i]%j===0){
            count++;
        }
    }
    if(count===2){
        console.log("Prime number is",numbers[i]);
        primeArray.push(numbers[i]);
    }
  }

  
  let max=primeArray[0];
  let min=primeArray[0];
  let sum=0;
  for(let i=1;i<primeArray.length;i++){
    sum=sum+primeArray[i];
    if(primeArray[i]>max){
        max=primeArray[i];
    }
    if(primeArray[i]<min){
        min=primeArray[i];
    }
  }
  console.log("Maximum number in this Array is: ",max);
  console.log("Minimum number in this Array is: ",min);
  console.log("Sum of all numbers in this Array is:",sum);
```

### Output for app.js
```
PS E:\numbersystem> node app.js
Prime number is 19
Prime number is 23
Prime number is 13
Prime number is 31
Prime number is 29
Prime number is 2
Prime number is 11
Prime number is 17
Prime number is 5
Maximum number in this Array is:  31
Minimum number in this Array is:  2
Sum of all numbers in this Array is: 131
```

## Git Commit

After writing the code, I commited and pushed the changes.

## Conclusion

This project demonstartes basic operation on numbers and serves as a foundation for further enhancements in my coding journey.



