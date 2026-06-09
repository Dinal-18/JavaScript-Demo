/*console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 2);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);*/

//In comparisons:null behaves like 0

//In loose equality:null only equals undefined
//Why No Number Conversion Here?

//Because equality (==) follows separate internal rules.
/*
null == undefined //true
Because:undefined → NaN
And comparisons with NaN are always false.*/

//null ==  0 //false
//For null, JavaScript DOES NOT convert it to 0 in loose equality.

/*
undefined → value not assigned automatically
null → value intentionally made empty
null == undefined → true because both represent “no value” in JavaScript loose equality (==)
*/
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


//=== conversion and check datatypes
console.log("2" === 2);
