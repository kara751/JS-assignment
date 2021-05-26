var cel;
var fahr;

function temp(cel,fahr=0){
    var celsius=(cel*9/5)+32;
    var fahrenheit=(fahr-32)*5/9;
    document.write("<h1> Celsius is: "+celsius+"</h1><br>");
    document.write("<h1> Fahrenheit is: "+fahrenheit+"</h1>");

}
temp(cel=parseInt(prompt("Enter celsius:-")),fahr=parseInt(prompt("Enter fahrenheit:-")))