function darkMode(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}

    let loginstatus = localStorage.getItem("loginstatus");//check 3ml login wla lw ah f hi3ml da
    if(loginstatus !== null){
        let fname = localStorage.getItem("fname");
        let lname = localStorage.getItem("lname");
        const myNode = document.getElementById("loginspan");
        myNode.innerHTML = '<span class="hllo" class="navcontent">  hi ' + fname + ' ' + lname + '</span> <span class="navcontent" onclick="logout()">Logout</span>';
    }

    function logout() {
        window.localStorage.clear();
        window.location.reload();
    }

