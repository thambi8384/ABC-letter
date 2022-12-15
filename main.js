let a;
let b;
let i,j;
  for(i=1;i<=5;i++){
  a=65;
  for (j=1;j<=i;j++){
    b=String.fromCharCode(a);
      a++
       document.write(b)
  }
       document.write("<br>")
 }