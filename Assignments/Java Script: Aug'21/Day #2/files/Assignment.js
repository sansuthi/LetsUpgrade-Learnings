/* 1. Create an Array with five names and print all five in reverse. */
let names = ["John", "Katy", "Chris", "Monty", "Rose"];
console.log("1. ARRAY IN REVERSE ORDER");
console.log("Array of Names: ", names);
console.log("Array in reverse order:");
for(let i=names.length-1; i>=0; i--)
{
    console.log(names[i]);
}
console.log("---------------------------------------------");

/* 2. print only the elements which are divisible by 5 from 1 to 50. */
let num = 1;
console.log("2. NUMBERS DIVISIBLE BY 5 FROM 1 TO 50");
while(num <= 50)
{
    if (num % 5 == 0)
    {
        console.log(num);
    }
    num++;
}
