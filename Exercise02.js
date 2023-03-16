// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);



for (let i = 0; i <5; i++) {
    let stars= '';
    for (let j=0; j < i+1; j++) { 
        stars += '* '        
    }  
    console.log(stars);
}
let stars = [];