$("#nav-btn").click(function navBarOpen(){
    $("#navBar").show(); 
}); 

function login(){
    let loginEmail=$("#txtLoginEmail").val(); 
    let loginPassword=$("#txtLoginPassword").val();
    console.log("login script"); 
    console.log(loginEmail, loginPassword); 
    //read the users
    let userList = readUsers(); 
    for (let i=0; i<userList.length; i++){
        console.log(userList[i]); //this iw the way to travel through an array
        if(loginEmail==userList[i].email){
            console.log("Welcome");
        }else{
            console.log("Invalid Credentials");
        }
    }
}

function init(){
    //hook events
    $("#btnLogin").click(login);
}
window.onload=init; 