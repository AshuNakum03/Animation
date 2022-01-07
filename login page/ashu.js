function func(e){
    e.preventDefault();
    var a = document.getElementById("abc").value;
    console.log(a);
    var b = document.getElementById("bc").value;
    console.log(b);
    var c = document.getElementById("password").value;
    console.log(c);
    document.getElementById("para").innerHTML = "black" + a + b + c;
   
    if(abc.value === '' || password.value === '')
    {
        msg.innerHTML = "Please enter the detail.....";

        setTimeout(() => msg.remove(), 2000);
    }
    else{
       document.getElementById("para").innerHTML = "Successful Submit";

       setTimeout(() => para.remove(), 5000);
    }
}