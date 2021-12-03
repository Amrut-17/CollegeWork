function check(){
    var temp = document.getElementById('subtn');
    var name = document.getElementById('name').value;
    var num = document.getElementById('contact').value;
    alert("Your Name is " + name + " and Contact number is : " + num);
}

var temp1 = document.getElementById("contnr");
function mouseOver() {
    temp1.style.background="linear-gradient(11deg, #fdcd3b 60%, #ffed4b 60%)";
    temp1.style.fontWeight="31px";
}

function mouseOut(){
    temp1.style.background="white";
    temp1.style.borderRadius="30px";
    temp1.style.boxShadow="9px 7px 5px gray";
}

