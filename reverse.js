var string=prompt("Enter string:");
var reverse="";
for(var i=string.length-1;i>=0;i--){
    reverse=reverse+string[i];
   
}
if(string==reverse){
    document.write("<h1>"+ string + " is palindrome</h1>" );
    document.write("<h1> Reverse of "+ string +" is "+reverse+"</h1>")
}
else{
    document.write("<h1>" + string + " is not palindrome <h1>");
    document.write("<h1> Reverse of "+ string +" is "+reverse+"</h1>")

}



