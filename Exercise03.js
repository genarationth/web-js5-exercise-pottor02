let xValue = 10;
while (xValue > 0) {
    xValue -= 0.5 
    console.log(xValue)
}

let i = 0
while ( i <= 100) {
    if ( i % 2 !=0) {
        console.log(i)
    }
    i++
}


function square(n){
    let i=0;
    while(i<=n){
        console.log(`[${i}]`);
        i++;
    }
    }
    square(5);

    
function findTotal(n){let total=0;
    for(let i=1;i<=n;i++){
    total = total+i;
    }
    console.log(total)}
    findTotal(5);
    findTotal(19);