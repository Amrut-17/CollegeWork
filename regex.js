function check(){
    var number = document.getElementById('num').value;
    var regex = /^\d{10}$/;
    if(regex.test(number)){
        alert("Your Number is : " + number);
    }else{
        alert("Number is Not valid.");
    }
}