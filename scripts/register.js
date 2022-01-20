$("#nav-btn").click(function navBarOpen(){
    $("#navBar").removeClass("navBarHide");
    setTimeout(function(){
        $("#navBar").addClass("navBarHide")
    },5000) 
});  

console.log("Register"); 
//create the constructor
class User{
    constructor (email,password,first,last,age,address,phone,payment,color){
        this.email=email; 
        this.password=password; 
        this.fname=first; 
        this.lname=last; 
        this.age=age; 
        this.address=address; 
        this.phone=phone; 
        this.payment=payment; 
        this.color=color; 
    }
}
//register user
function registerUser(){
    let email=$("#txtEmail").val();//#means it is an id w/o it means it is a class
    let password=$("#txtPassword").val(); 
    let first=$("#txtFirst").val(); 
    let last=$("#txtLast").val(); 
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val(); 
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color); 
    console.log(user); 
    if(isValid(user)==true){
        saveUser(user); //this fn is in the storeManager.js 
    }
    clearInput(); 
}
function init(){
    console.log("Init Function");
    //hook events
    $("#btnSave").click(registerUser); 
}
window.onload=init; 

//$("#txtEmail").val(""); this will clear the form once it's ran

function clearInput(){
    $("#txtEmail").val(" ");
    $("#txtPassword").val("");
    $("#txtFirst").val(" ");
    $("#txtLast").val(" ");
    $("#txtAge").val(" ");
    $("#txtAddress").val(" ");
    $("#txtPhone").val(" ");
    $("#selPayment").val(" ");
    $("#txtColor").val("#000000");
}

function isValid(user){
    let valid=true; 
    

    if(user.email.length==0){
        valid=false; 
        $("#txtEmail").addClass("error"); 
    }
    if(user.password.length==0){
        valid=false; 
        $("#txtPassword").addClass("error"); 
    }
    if(user.fname.length==0){
        valid=false; 
        $("#txtFirst").addClass("error"); 
    }
    if(user.lname.length==0){
        valid=false; 
        $("#txtLast").addClass("error"); 
    }else{
        $('input').removeClass("error"); 
        return valid; 
    }   
}