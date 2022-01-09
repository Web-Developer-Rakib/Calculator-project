function v (newVal) {
    var val= document.getElementById("display").value += newVal;
}

function e() {
   var a= document.getElementById("display").value;
   var b= eval(a);
   document.getElementById("display").value =b;
}
function c(cut) {
    document.getElementById("display").value = cut;
}