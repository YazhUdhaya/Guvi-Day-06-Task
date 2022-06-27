//Fix the code to get the largest of three.

//Code:

aa = (f, s, t) => {
    console.log(f, s, t);
    if (f > s && f > t) {
        console.log(f)
    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 6, 8);


//Fix the code to Sum of the digits present in the number

//Code:

let n = '123';
console.log(add(n));
function add(n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    return sum;
}



//Fix the code to Sum of all numbers using IIFE function

//Code:

const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(() => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    console.log(sum);
    //return sum;
})();


//Fix the code to gen Title caps.

Code:

var arr1 = ["guvi", "geek", "zen", "fullstack"];
var ano = function () {
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i][0].toUpperCase() + arr1[i].substr(1));
    }
}
ano();


//Fix the code to return the Prime numbers

Code:

var arrayNum = [1, 3, 2, 5, 10];
const myPrime = arrayNum.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num;
});
console.log(myPrime);


//Fix the code to sum the number in that array

//Code:

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b;
const add1 = num.reduce(sum);
console.log(add1);



//Fix the code to rotate an array by k times and return rotated array using IIFE function

//Code:

var arr2 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
//k = arr.length % k;
(() => {
    // arr = {};
    out = arr2.slice(k, arr2.length);
    var count = out.length;
    for (var i = 0; i < k; i++) {
        out[count] = arr2[i];
        count += 1;
    }
    console.log(out);
})();


//Fix the code to gen Title caps.

//Code:

var arr3 = ["guvi", "geek", "zen", "fullstack"];
(() => {
    for (var i = 0; i <= arr3.length; i++) {
        console.log(arr3[i][0].toUpperCase() + arr3[i].substr(1));
    }
})();



//print all odd numbers in an array using IIFE function

//Code:

var arr4 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(() => {
    for (var i = 0; i < arr4.length; i++) {
        if (arr4[i] % 2 !== 0) {
            console.log(arr4[i]);
        }
    }
})();


//Fix the code to reverse.

//Code:

((str) => {
    let str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd");


//Fix the code to remove duplicates.

//Code:

var res = (function (arr) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {

        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);

        }

    }
    console.log(newArr.join(" "));
});
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);



//Fix the code to give the below output:

//Expected Output:

[
    { firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard" },
    { firstName: "Sri", lastName: "Devi", age: 28, role: "Coder" }
]

Code:
var array = [[["firstname", "vasanth"], ["lastname", "Raje"], ["age", 24], ["role", "JSWizard"]], [["firstname", "Sri"], ["lastname", "Devi"], ["age", 28], ["role", "Coder"]]];
var finalArrOfObj = [];

for (var i = 0; i < array.length; i++) {
    finalArrOfObj[i] = {};
    for (var j = 0; j < array[i].length; j++) {
        finalArrOfObj[i][array[i][j][0]] = array[i][j][1];
    }
}
console.log(finalArrOfObj);


//Another Way Of Object Output

var array = [[["firstname", "vasanth"], ["lastname", "Raje"], ["age", 24], ["role", "JSWizard"]], [["firstname", "Sri"], ["lastname", "Devi"], ["age", 28], ["role", "Coder"]]];

var final = array.map(Object.fromEntries);

console.log(final);



//Fix the code to give the below output:

//Sum of odd numbers in an array

// Code:

var as = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var s = as.reduce(function (a, c) {
    if (c % 2 !== 0) {
        return a + c;
    }
    return a;
});
console.log(s);

//Fix the code to give the below output:

//Swap the odd and even digits

//Code:

aa = data => {
    var a = data;
    let merge = [];
    for (i = 0; i < a.length - 1; i = i + 2) {
        var l = "";
        var s = a[i + 1]
        var b = a[i]
        l += s;
        l += b;
        merge.push(l);
    }
    console.log(merge.join(""));
}
aa("1234");
