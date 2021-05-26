var strings=prompt("Enter strings");
var countA=0
var countE=0
var countI=0
var countO=0
var countU=0
for(i=0;i<strings.length;i++){
    if(strings[i]=='a'){
        countA++;
    }
    else if(strings[i]=='e')
    {
        countE++
    }
    else if(strings[i]=='i')
    {
        countI++
    }
    else if(strings[i]=='o')
    {
        countO++
    }
    else if(strings[i]=='u')
    {
        countU++
    }
    
}
document.write("<h1>A string " +"<em>" + strings + "</em>"+ " has a following vowels:-<br></h1>")
document.write("<h1>A is " + countA + "<br></h1>");
document.write("<h1>E is " + countE + "<br></h1>");
document.write("<h1>I is " + countI + "<br></h1>");
document.write("<h1>O is " + countO + "<br></h1>");
document.write("<h1>U is " + countU + "<br></h1>");
