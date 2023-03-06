//check if the user make login or not
    let loginstatus = localStorage.getItem("loginstatus");
    if(loginstatus !== null){
        let fname = localStorage.getItem("fname");
        let lname = localStorage.getItem("lname");
        const myNode = document.getElementById("loginspan");
        myNode.innerHTML = '<span class="hllo" class="navcontent">  Hello ' + fname +'</span> <span class="navcontent" onclick="logout()">Logout</span>';
    }
    // Logout functionality
  function logout() {
    setInterval(()=>{
        window.localStorage.removeItem("loginstatus");
        window.localStorage.removeItem("shopcart");
        // window.localStorage.clear();
        window.location.href="./pages/login/login.html"
    },1000)
        
    }
