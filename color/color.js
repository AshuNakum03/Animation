function func()
{
    var n1 = Math.floor(Math.random() * 255);
    var n2 = Math.floor(Math.random() * 255);
    var n3 = Math.floor(Math.random() * 255);
    var n4 = Math.floor(Math.random() * 255);
    var n5 = Math.floor(Math.random() * 255);
    var n6 = Math.floor(Math.random() * 255);
    const element = document.getElementById("clr");
    element.style.backgroundImage = `linear-gradient(rgb(${n1},${n2},${n3}),rgb(${n4},${n5},${n6}))`;
}
