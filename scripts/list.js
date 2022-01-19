function createRow(users){
    for(let i=0;i<users.length;i++){
        let user=user[i]; 
        let userData=
        `<tr>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.first}</td>
            <td>${user.last}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
        </tr>
        `;
        console.log(tmp);
        $(".usersList").append(userData); 
    }
}


function init(){
    console.log("Listing users"); 
    let users=readUsers(); 
    createRow(users); 
}

window.onload=init; 