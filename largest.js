var x=parseInt(prompt("Enter first number"));
var y=parseInt(prompt("Enter second number"));
var z=parseInt(prompt("Enter third number"));

if ((x>y && x>z)){
    document.write("<center><h1> "+ x + " is greater</h1></center>");
}
else if((y>x && y>z)){

    document.write("<center><h1>" + y + " is greater</h1></center>");
}
else{
    document.write( "<center><h1>" + z + " is greater</h1></center>");
}
 
