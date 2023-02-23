function darkMode(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}



let btn=document.getElementById('btn');
let name=document.getElementById('name');
let email=document.getElementById('email');
let num=document.getElementById('num');
let texta=document.getElementById('texta');


btn.onclick=function(){
    name.value="";
    email.value="";
    num.value="";
    texta.value="";
}