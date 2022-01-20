$("#nav-btn").click(function navBarOpen(){
    $("#navBar").removeClass("navBarHide");
    setTimeout(function(){
        $("#navBar").addClass("navBarHide")
    },5000) 
});  

function createRow(users){
    for(let i=0;i<users.length;i++){
        let user=users[i]; 
        let userData=
        `<tr>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td><div style="margin-top: 3px; margin-bottom: 3px; width: 50px; margin-left: 45px; height: 30px; background-color: ${user.color};"></div></td>
        </tr>
        `;
        console.log(userData);
        $(".usersList").append(userData); 
    }
}

function loadTable(){
    let users = readUsers(); 
    createRow(users); 
}

function init(){
    console.log("Listing users"); 
    loadTable(); 
}

window.onload=init; 