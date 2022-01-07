function func(event)
{
    event.preventDefault();
    var a = document.getElementById("abc").value;
    var b = document.getElementById("bcd").value;
    document.getElementById("para").style.color = "black";
    document.getElementById("para").innerHTML= a + b;

    if(abc.value === '' || bcd.value === '')
    {
        alert("Please Add Item");
    }
    else
    {
        document.getElementById("para").innerHTML= a + b; 
        arr.push({title:a, dec:b});
        display();
        
    }
}
let arr = [];
function display()
{
     let html = ``
     arr.map((item,index) => {
        html += `<div style="background-color:black; width:200px;heigth:40px;padding:10px 10px 10px;border-radius:10px;"><div class="jk">
        <div class="mk" style="magin-bottom:30px;">${item.title}</div> 
        <div class="lk">${item.dec}</div>
        </div>
        <a href=" " onclick="del()">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Delete
    </a></div>`
     });
     document.getElementById("para").innerHTML= html; 
}

function del(index)
{
    e.preventDefault();
    arr.splice(index,1);
    display();   
}

function cle(e)
{
    e.preventDefault();
    arr = [];
    display();
}

