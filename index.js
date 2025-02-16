function check(num) {
 let count = 0;
 for (let i = 2; i <num;i++){
  if (i%2==0)coutn++;
 }
 return count;

}

let count=check(5);

if(count==0){
    console.log("prime");
    
}else{
    console.log("not a prime");
    
}