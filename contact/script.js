let btn=document.getElementById('btn');
let name=document.getElementById('name');
let email=document.getElementById('email');
let num=document.getElementById('num');
let texta=document.getElementById('texta');

// return the values to null after send messages
btn.onclick=function(){
    name.value="";
    email.value="";
    num.value="";
    texta.value="";
    alert('Thank you for contacting us')
}
// For nav Bar after login
let loginstatus = localStorage.getItem("loginstatus");
if(loginstatus !== null){
    let fname = localStorage.getItem("fname");
    let lname = localStorage.getItem("lname");
    const myNode = document.getElementById("loginspan");
    myNode.innerHTML = '<span class="hllo" class="navcontent">  Hello ' + fname +'</span> <span class="navcontent" onclick="logout()">Logout</span>';
}
function logout() {
setInterval(()=>{
    window.localStorage.removeItem("loginstatus");
    window.localStorage.removeItem("shopcart");
    // window.localStorage.clear();
    window.location.href="../pages/login/login.html"
},1000)
    
}
