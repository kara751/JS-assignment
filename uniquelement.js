var arr1=[1,2,3];
var arr2=[100,2,1,10];
var a=arr1.filter((o => arr2.indexOf(o)=== -1));
var b=arr2.filter((o => arr1.indexOf(o)=== -1));
var result=a.concat(b);
document.write("<h1>"+result+"</h1>");