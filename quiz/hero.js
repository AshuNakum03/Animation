 var que = [1+'.'+" "+'Is Ashutosh Single or Mingal ?',2+'.'+" "+'If ashutosh had to eat the same food for dinner every day,what would he pick? ',3+'.'+" "+"What is ashutosh's favorite series on Netflix?",4+'.'+" "+'ashutosh has never ever...',5+'.'+" "+"What is ashutosh's favorite place?"] 
 var count = 0;

function func()
{
    
    var a = prompt("Enter Your Name & Start the Quiz!!");
    if(a != null && a != " "){
    document.getElementById("para").innerHTML = "Hello" +" "+ a +" "+ "start your quiz by hit the startQuiz!!";
    document.getElementById("start").style.display ="block";
    document.getElementById("bt").style.display = "none";
    }
    }

function afun()
{
    document.getElementById("ques").innerHTML = que[0];
    count = 0;
    document.getElementById("para").innerHTML = "";
    document.getElementById("abc").innerHTML = "";
    document.getElementById("start").style.display = "none";
    document.getElementById("ques").style.backgroundColor = "white";
}

function score()
{
    document.getElementById("abc").innerHTML = "Your Score is:" + count +''+ "out of 5"; 
}
function bfunc(i){
    var c = i+1;
    document.getElementById("ques").innerHTML = que[c];
    ans();
}
function Next()
{
    document.getElementById("result").innerHTML = "";
    var i = 0;
    var c = que.length;

    for(i;i<c;i++)
    {
        if(document.getElementById("ques").innerHTML === que[i])
        {
            bfunc(i);
            break;
        }
    }
}
function ans()
{
    if(document.getElementById("ques").innerHTML === que[0])
    {
        var opt1 = document.createElement("button");
        opt1.innerHTML="Single";
        document.body.appendChild(opt1);                 
        opt1.onclick = function opta()
        {
            document.getElementById("result").style.color = "green";
            document.getElementById("result").innerHTML = "Your Ans is Correct";
            
            opt1.style.display = "none";
            opt2.style.display = "none";
            setTimeout(Next,1000);
        }
        var opt2 = document.createElement("button");
        opt2.innerHTML="Mingal";
        document.body.appendChild(opt2);
        opt2.onclick = function opta()
        {
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML = "Your Ans is Wrong";
            
            opt1.style.display = "none";
            opt2.style.display = "none";
            setTimeout(Next,1000);
        }
    }
    else if(document.getElementById("ques").innerHTML === que[1])
    {
        var opt1 = document.createElement("button");
        opt1.innerHTML="Pizza";
        document.body.appendChild(opt1);                 
        opt1.onclick = function opta()
        {
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML = "Your Ans is Wrong";
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none"; 
            opt4.style.display = "none";
            setTimeout(Next,1000)
        }
        var opt2 = document.createElement("button");
        opt2.innerHTML="Burger";
        document.body.appendChild(opt2);
        opt2.onclick = function opta()
        {
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML = "Your Ans is Wrong";
            count++;
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none"; 
            opt4.style.display = "none";
            setTimeout(Next,1000)

        }
        var opt3 = document.createElement("button");
        opt3.innerHTML="Dhokla";
        document.body.appendChild(opt3);
        opt3.onclick = function opta()
        {
            document.getElementById("result").style.color = "green";
            document.getElementById("result").innerHTML = "Your Ans is currect";
            count++;
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            setTimeout(Next,1000)

        }
        var opt4 = document.createElement("button");
        opt4.innerHTML="Burger";
        document.body.appendChild(opt4);
        opt4.onclick = function opta()
        {
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML = "Your Ans is Wrong";
            count++;
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            setTimeout(Next,1000)

        }
}
else if(document.getElementById("ques").innerHTML === que[2])
{
    var opt1 = document.createElement("button");
    opt1.innerHTML="squadgame";
    document.body.appendChild(opt1);                 
    opt1.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none"; 
        opt4.style.display = "none";
        setTimeout(Next,1000)
    }
    var opt2 = document.createElement("button");
    opt2.innerHTML="lacadepapel";
    document.body.appendChild(opt2);
    opt2.onclick = function opta()
    {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Your Ans is Correct";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none"; 
        opt4.style.display = "none";
        setTimeout(Next,1000)

    }
    var opt3 = document.createElement("button");
    opt3.innerHTML="Lock&Key";
    document.body.appendChild(opt3);
    opt3.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
        setTimeout(Next,1000)

    }
    var opt4 = document.createElement("button");
    opt4.innerHTML="AjeebDasta";
    document.body.appendChild(opt4);
    opt4.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
        setTimeout(Next,1000)
    }
}
else if(document.getElementById("ques").innerHTML === que[3])
{
    var opt1 = document.createElement("button");
    opt1.innerHTML="Party";
    document.body.appendChild(opt1);                 
    opt1.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none"; 
        opt4.style.display = "none";
        setTimeout(Next,1000)
    }
    var opt2 = document.createElement("button");
    opt2.innerHTML="Drinking";
    document.body.appendChild(opt2);
    opt2.onclick = function opta()
    {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Your Ans is Correct";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none"; 
        opt4.style.display = "none";
        setTimeout(Next,1000)

    }
    var opt3 = document.createElement("button");
    opt3.innerHTML="Driving";
    document.body.appendChild(opt3);
    opt3.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
        setTimeout(Next,1000)

    }
    var opt4 = document.createElement("button");
    opt4.innerHTML="Playing";
    document.body.appendChild(opt4);
    opt4.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
        setTimeout(Next,1000)
    }
}
else if(document.getElementById("ques").innerHTML === que[4])
{
    var opt1 = document.createElement("button");
    opt1.innerHTML="Hill";
    document.body.appendChild(opt1);                 
    opt1.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none"; 
        opt4.style.display = "none";
        setTimeout(Next,1000)
    }
    var opt2 = document.createElement("button");
    opt2.innerHTML="Beach";
    document.body.appendChild(opt2);
    opt2.onclick = function opta()
    {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Your Ans is Correct";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none"; 
        opt4.style.display = "none";
        setTimeout(Next,1000)

    }
    var opt3 = document.createElement("button");
    opt3.innerHTML="School";
    document.body.appendChild(opt3);
    opt3.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
        setTimeout(Next,1000)

    }
    var opt4 = document.createElement("button");
    opt4.innerHTML="Advanture";
    document.body.appendChild(opt4);
    opt4.onclick = function opta()
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Your Ans is Wrong";
        count++;
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
        setTimeout(Next,1000)
    }
}
else
{
    document.getElementById("ques").innerHTML = "Quiz ends here";
    score();
}
}