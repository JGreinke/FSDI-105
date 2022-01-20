$("#nav-btn").click(function navBarOpen(){
    $("#navBar").removeClass("navBarHide");
    setTimeout(function(){
        $("#navBar").addClass("navBarHide")
    },5000) 
}); 

function login(){
    let loginEmail=$("#txtLoginEmail").val(); 
    let loginPassword=$("#txtLoginPassword").val();
    console.log("login script"); 
    console.log(loginEmail, loginPassword); 
    //read the users
    let userList = readUsers(); 
    let flag=false; 
    for (let i=0; i<userList.length; i++){
        console.log(userList[i]); //this iw the way to travel through an array
        if(loginEmail==userList[i].email && loginPassword==userList[i].password){
            console.log("Welcome");
            flag=true; 
            window.location="users.html"//will take to users page if the info is true.
        }
        if(flag==false){
            console.log("Invalid Credentials");
            $("#alertError").removeClass("hide"); 
            setTimeout(function(){
                $("#alertError").addClass("hide"); 
            },3000);
        }
    }
}

function init(){
    //hook events
    $("#btnLogin").click(login);
}
window.onload=init; 