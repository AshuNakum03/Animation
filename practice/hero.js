console.log("hello");

// let myvar;
// myvar =String(34);
// console.log(myvar,typeof(myvar));

// myvar = parseInt("6987");
// console.log(myvar,typeof(myvar));

// myvar = Number(6987);
// myab = 876;
// console.log(myvar + myab);

// let marks = [34,50,60,70,80];
// marks.pop();
// marks.unshift(123);
// marks.shift();
// console.log(marks);

// let arr = new Array(0,50,40);
// console.log(arr);

// let marks = [25,45,34,67,58];
// console.log(marks);

// let arr = new Array('abc',45,6,78,8,8);
// console.log(arr.length);
// arr[0] = 'ashutosh';
// let abc = arr[0];
// console.log(abc);
// console.log(arr);

// marks.push(67758);
// marks.pop();
// marks.splice(3,5);
// console.log(marks);

// var newDiv = document.createElement('div');
// newDiv.className = "ashutosh";
// newDiv.id = "nakum";
// newDiv.setAttribute('title', 's

// var newDiv2 = document.createTextNode("Hello World");
// newDiv.appendChild(newDiv2);
// console.log(newDiv2);


// var newabc = document.querySelector('div .abcdd');
// var h1 = document.querySelector('div h1');
// abcdd.insertBefore(newDiv, h1);
// console.log(newabc);
// var newDiv = document.createElement('div');
// newDiv.className = "abc";
// newDiv.setAttribute('title','ashutoshnakum');
// console.log(newDiv);
// var newDivtext = document.createTextNode("hello world");
// console.log(newDivtext);
// newDiv.appendChild(newDivtext);
// var container = document.querySelector('header .container');
//var h2 = document.querySelector('header h2');
// console.log(newDiv);
// container.insertBefore(newDiv, h2);
// console.log(nakum);
// let myobj = {
//     'nakum ashu' : 'ashutosh',
//     abc:879,
//     bcd: 'bhbhvgv',
//     njhs:'khuigig'
// }
// console.log(myobj['nakum ashu']);
// function buttonClick(event)
// {
//     // console.log("button clicked");
// //    console.log(event);
// console.log(event.target);
// console.log(event.target.id);
// var naku = document.getElementById("abc");
// naku.innerHTML = '<h3>' + event.target.id+'</h3>';
// console.log(event.type);
// }
// var hfh = document.getElementById('button').AddEventListener('click',runevent(e));
// var box = document.getElementById("bts");
// box.addEventListener('mouseenter');
// console.log(box);
// box.addEventListener('mousemove',runevent);
// function runevent(e){
//     console.log('event type:'+ e.type);
// }
// abc = '<h3>MouseX:'+event.offsetx

var question =[
    {
        prompt :"1+2?\n(a)3\n(b)5\n(c)6",
        answer:"a"
    },
    {
        prompt :"5+2?\n(a)3\n(b)5\n(c)6",
        answer:"a"
    },
    {
        prompt :"4+2?\n(a)3\n(b)5\n(c)6",
        answer:"a"
    },
    {
        prompt :"6+2?\n(a)3\n(b)5\n(c)6",
        answer:"a"
    },
]

var score = 0;

for(var i=0; i<question.length;i++)
{
    var response = window.prompt(question[i].prompt);
    if(response == question[i].answer)
    {
        score++;
        alert("correct");
    }
    else{
        alert("wrong");
    }
    alert("you got" + score + "/" + question.length);
}