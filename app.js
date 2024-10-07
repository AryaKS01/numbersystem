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