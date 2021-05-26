function add(a,b){
    b();
}
function print(){
    document.write("<h1>Hello world</h1>")
}
add(1,print)