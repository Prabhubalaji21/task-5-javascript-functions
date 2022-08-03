//print an odd num in array by normal function


let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds1 = arr1.filter(n => n%2)

console.log(odds1)

//convert all strings to title case string 

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  
  console.log(titleCase("prabhu balaji project engineer from vellore"));


  //sum of all numbers in an array

  const sum1 = [1, 2, 3, 4, 5, 6, 7].reduce(add1, 0); 

  function add1(accumulator, a) {
    return accumulator + a;
  }
  
  console.log(sum1); 


  // return all the prime numbers in an array

  const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
  
  
  function isPrime(num) {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(array.filter(isPrime));


  //return all the palindromes in a array



  const arr2 = ['carecar', 1344, 12321, 'did', 'cannot', 'amma','appa', 121,'prabhu'];
  const isPalindrome = el => {
     const str = String(el);
     let i = 0;
     let j = str.length - 1;
     while(i < j) {
        if(str[i] === str[j]) {
           i++;
           j--;
        }
        else {
           return false;
        }
     }
     return true;
  };
  const findPalindrome = arr2 => {
     return arr2.filter(el => isPalindrome(el));
  };
  console.log(findPalindrome(arr2));

//return median of two sorted array at the same size

function getMedian(ar1, ar2, n)
    {
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1)
    {
        let temp = ar1[i];
        ar1[i] = ar2[j];
        ar2[j] = temp;
        i--; j++;
    }
    ar1.sort(function(a, b){return a - b});
    ar2.sort(function(a, b){return a - b});
    return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
    }
      
    let ar1 = [ 11, 22, 25, 36, 40, 60 ];
    let ar2 = [ 12, 23, 27, 50, 55, 80 ];
  
    let n1 = 6;
    let n2 = 6;
    if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
    else
    console.log("Doesn't work for arrays of unequal size");


//remove duplicates from an array




function removeDuplicates(arr3, n)
{
  var arr3
 
    if (n==0 || n==1)
        return n;
 
    var temp = new Array(n);

    var j = 0;
    for (var i=0; i<n-1; i++)
 
        if (arr3[i] != arr3[i+1])
            temp[j++] = arr3[i];
 
    temp[j++] = arr3[n-1];

    for (var i=0; i<j; i++)
        arr3[i] = temp[i];
 
    return j;
}
 
var arr3 = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6 ,6 ,7, 8, 9];
    var n = arr3.length;

    n = removeDuplicates(arr3, n);
 
    for (var i=0; i<n; i++)
       console.log( arr3[i]+" ");


//rotate an array by k times


function RightRotate(a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
            console.log(a[n + i - k] + " ");
        }
        else {
  
          console.log((a[i - k]) + " ");
        }
    }
    console.log("<br>");
}
  

let Array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let N = Array1.length;
let K = 2;
  
RightRotate(Array1, N, K);


//print odd numbers in array by using arrow function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const odds = arr.filter(number => {
  return number % 2 !== 0;
});

console.log(odds);

//convert all strings to title case string by using arrow function


const str = "prabhu balaji project engineer from vellore";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);

//sum of all numbers in an array by usig arrow function

const sum = [1, 2, 3, 4, 5].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);



  // return all the prime numbers in an array by using arrow function


  var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

//return all the palindromes in a array by using arrow function

const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(getAllPalindromes(["hello", "noon" , "amma" , "appa", "prabhu"]));



      